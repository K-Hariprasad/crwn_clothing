import React from "react";
import "./InputField.scss";
function InputField({
  fieldname,
  errMsg,
  id,
  onChangeHandler,
  value,
  ...rest
}) {
  return (
    <div className="inputField__container">
      <input {...rest} id={id} onChange={onChangeHandler} />
      {fieldname && (
        <label
          htmlFor={id}
          className={`${value?.length ? "activeField" : ""} `}
        >
          {fieldname}
        </label>
      )}
    </div>
  );
}
export default InputField;
