export const signInFields = [
    {
        type:"email",
        fieldname: "Email",
        id:"email",
        name:"email",
        autoComplete:"email",
        placeholder:" ",
        // pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        errMsg: "Email should be in valid format!",
        'aria-invalid':"true",
        'aria-errormessage':"email_error"
    },
    {
        type:"password",
        fieldname: "Password",
        id:"password",
        name:"password",
        autoComplete:"password",
        placeholder:" ",
        // pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        errMsg: "Password should have minimum six characters, at least one letter, one number and one special character!",
        'aria-invalid':"true",
        'aria-errormessage':"password_error"
    },
]