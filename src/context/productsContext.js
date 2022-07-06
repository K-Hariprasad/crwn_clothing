import { createContext, useState, useEffect } from 'react'
import { getCollectionsAndDocuments } from '../utils/fireStoreUtils';
export const ProductsContext = createContext({
    products : []
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetchProductsData()
    },[])
    const fetchProductsData = async() => {
        let productsData = await getCollectionsAndDocuments()
        setProducts(productsData)    
    }
    return <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
}