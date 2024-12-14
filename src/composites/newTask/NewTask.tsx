import React from "react";
import { Button, Input, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { initialValues } from "./constants";
import { notifications } from "@mantine/notifications";
type Props = {};

const NewTask = (props: Props) => {
  const [value, setValue] = useState<Date | null>(null);
  console.log("🚀 ~ NewTask ~ value:", value)

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      newTask: Yup.string().required().label("newTask"),
      description: Yup.string().required().label("description"),
    }),
    onSubmit: async (values) => {
      notifications.show({
        title: 'Task Sucessfully added ',
        message: '',
      })
    },
  });
  const { values,errors } = formik;
  console.log("🚀 ~ NewTask ~ errors:", errors)
  console.log("🚀 ~ newTask ~ values:", values);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="col-span-6 border-2 rounded-xl p-4  space-y-2">
        <h1> Enter Task </h1>
        <Input
          placeholder="Search Task"
          name="newTask"
          value={formik.values.newTask}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.newTask && formik.errors.newTask}
        ></Input>
      <Textarea
        label="Description"
        placeholder="example: to fix this keep in mind ......."
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.description && formik.errors.description}
      />

      <DateInput
        value={value}
        onChange={setValue}
        label="Date input"
        placeholder="Date input"
      />
      <Button className="w-40" type="submit">Add</Button>
    </form>
  );
};

export default NewTask;
