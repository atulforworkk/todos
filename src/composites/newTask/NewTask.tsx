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
     newTask: Yup.string().required().label("newTask"),
     description: Yup.string().required().label("description"),
     date: Yup.string().required().label("date"),
    }),
    onSubmit: async (values) => {},
  });
  const { values } = formik;
  console.log("🚀 ~ newTask ~ values:", values);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="col-span-6 border-2 rounded-xl p-4  space-y-2"
    >
      <h1> Enter Task </h1>
      <Input placeholder="Search Task"
            placeholder="Email"
            className="w-full"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
      ></Input>
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
    </form>
  );
};

export default NewTask;
