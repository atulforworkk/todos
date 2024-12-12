import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().email().required().label("Email Address"),
  password: Yup.string().required().label("Password"),
});

export const initialValues = {
  email: '',
  password: '',
};
          