import * as yup from "yup";

const regisrationSchema = yup.object().shape({
  email: yup.string().email().required("Email required!"),
  login: yup
    .string()
    .required("Login required!")
    .min(6, "Login should be at least 6 charachters length")
    .max(20, "Login can not be longer than 20 charachters"),
  realname: yup
    .string()
    .required("Name required!")
    .min(3, "Name should be at least 3 charachters length")
    .max(20, "Name can not be longer than 20 charachters"),
  password: yup
    .string()
    .required("Password required!")
    .min(8, "Password should be at least 8 charachters length")
    .max(20, "Password can not be longer than 20 charachters"),
  birthdate: yup
    .number()
    .min(1920, "Wrong year")
    .max(2004, "Not allowed for users under 18")
    .required("Date of birth is required!"),
});

const logInSchema = yup.object().shape({
  email: yup.string().email().required("Email required!"),
  password: yup
    .string()
    .required("Password required!")
    .min(8, "Password should be at least 8 charachters length")
    .max(20, "Password can not be longer than 20 charachters"),
});
export { regisrationSchema, logInSchema };
