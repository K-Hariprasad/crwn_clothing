import React from "react";
import InputField from "../../components/inputField/InputField";
import { signInFields } from "./signinFields";
import "./Signin.scss";
import useForm from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  signinAuthUserWithEmailAndPassword,
} from "../../utils/firebase.config";
import { createUserDocFromAuth } from "../../utils/fireStoreUtils";
import { BaseButton, GoogleButton } from "../../styled-components/StyledButton";

function SignIn() {
  const [form, handleChange] = useForm();
  const navigate = useNavigate();
  const signInwithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
    navigate("/");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form.email && form.password){
      await signinAuthUserWithEmailAndPassword(form.email, form.password);
      navigate("/");
    }
    else alert("Please fill the form!!")
  };
  return (
    <section className="signInForm__container" onSubmit={handleSubmit}>
      <form>
        {signInFields.map((item) => (
          <InputField
            key={item.id}
            {...item}
            onChangeHandler={handleChange}
            value={form[item.name]}
          />
        ))}
        <BaseButton type="submit">SIGN IN</BaseButton>
        <span>
          Don't have an account? <Link to="/sign-up">Sign Up</Link> here
        </span>
      </form>
      <br />
      <GoogleButton type="button" onClick={signInwithGoogle}>
        Sign In with Google
      </GoogleButton>
    </section>
  );
}

export default SignIn;
