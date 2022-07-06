import React from "react";
import InputField from "../../components/inputField/InputField";
import { signUpFields } from "./signupFields";
import "./Signup.scss";
import useForm from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase.config";
import { createUserDocFromAuth } from "../../utils/fireStoreUtils";
import { BaseButton } from "../../styled-components/StyledButton";

function SignUp() {
  const [form, handleChange] = useForm();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Password not matching!!");
    } else {
      const { user } = await createAuthUserWithEmailAndPassword(
        form.email,
        form.password
      );
      await createUserDocFromAuth(user, { displayName: form.firstName });
      navigate('/')
    }
  };
  return (
    <form className="signUpForm__container" onSubmit={handleSubmit}>
      {signUpFields.map((item) => (
        <InputField
          key={item.id}
          {...item}
          onChangeHandler={handleChange}
          value={form[item.name]}
        />
      ))}
      <BaseButton type="submit">SIGN UP</BaseButton>
      <span>
        Already have an account? <Link to="/sign-in">Sign In</Link> here
      </span>
    </form>
  );
}

export default SignUp;
