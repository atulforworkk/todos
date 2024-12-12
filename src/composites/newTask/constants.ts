import * as Yup from "yup";

export const validationSchema = Yup.object({
  newTask: Yup.string().required().label("newTask"),
  description: Yup.string().required().label("description"),
  date: Yup.string().required().label("date"),
});

export const initialValues = {
  newTask:"",
  description: "",
  date:"",
};
