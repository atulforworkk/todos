import React from "react";
import { Button, Input, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { initialValues } from "../loginForm/constant";
type Props = {};

const NewTask = (props: Props) => {
  const [value, setValue] = useState<Date | null>(null);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email().required().label("Email Address"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password should be valid"),
    }),
    onSubmit: async (values) => {},
  });
  const { values } = formik;
  console.log("🚀 ~ newTask ~ values:", values)
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="col-span-6 border-2 rounded-xl p-4  space-y-4"
    >
      <div >
        <h1> Enter Task </h1>
        <Input placeholder="Search Task"></Input>
        <Textarea
          label="Description "
          placeholder="example: to fix this keep in mind ......."
        />

        <DateInput
          value={value}
          onChange={setValue}
          label="Date input"
          placeholder="Date input"
        />
        <Button className="w-40">Add</Button>
      </div>
    </form>
  );
};

export default NewTask;
