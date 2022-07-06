import { doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore';
import { fireStoreDb } from './firebase.config';

export const createUserDocFromAuth = async( userAuth, addnInfo={} ) => {
    const userDocRef = doc(fireStoreDb, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc( userDocRef, {
                displayName, email, createdAt, ...addnInfo
            })
        } catch (error) {
            console.log(error.code)
        }
        return userDocRef
    }
}

//bulk upload of collection -- to trigger only once
export const addCollectionAndDocuments = async( collectionkey, objectToAdd) => {
    const collectionRef = collection(fireStoreDb, collectionkey)
    const batch = writeBatch(fireStoreDb);
    objectToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    });
    await batch.commit();
    console.log("writing completed!!")
}

//to retrive docs and collections from firebase
export const getCollectionsAndDocuments = async() => {
    const collectionRef = collection(fireStoreDb, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, curr)=>{
        acc.push(curr.data())
        return acc
    },[])
    return categoryMap
}