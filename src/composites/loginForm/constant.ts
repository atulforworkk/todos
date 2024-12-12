import { LoginPayload } from "@/types/auth";
import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().email().required().label("Email Address"),
  password: Yup.string().required().label("Password"),
});

export const initialValues: LoginPayload = {
  username: "bqsupport@kditsolutions.com",
  password: "test@123",
  rememberMe: false,
  trigger: true,
};
          