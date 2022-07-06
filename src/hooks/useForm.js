import { useState } from "react";
function useForm() {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldvalue = e.target.value;
    setForm({ ...form, [fieldName]: fieldvalue });
  };
  return [form, handleChange]
}
export default useForm;
