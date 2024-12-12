import { login } from "@/actions/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

import { LoginPayload } from "@/types/auth";
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { initialValues, validationSchema } from "./constant";

function LoginForm() {
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const { setAuthenticated, isAuthenticated } = useAuthStore();

  const form = useForm<LoginPayload>({
    initialValues,
    validate: yupResolver(validationSchema),
  });

  const { getInputProps, onSubmit } = form;

  const handleSubmit = async (values: LoginPayload) => {
    try {
      const data = await login(values);
      if (data != undefined) {
        setAuthenticated(true, data.id_token, data.tenant_id);
      }
    } catch (error) {
      setIncorrectPassword(!!error);
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <form className="min-w-[500px]" onSubmit={onSubmit(handleSubmit)}>
      <h2 className="mb-7 text-center font-sf-bold text-2xl font-bold">
        SIGN IN
      </h2>
      <ErrorMessage incorrectPassword={incorrectPassword} />
      <div className="grid grid-cols-1 gap-4">
        <TextInput
          size="md"
          label="Email Address"
          name="username"
          {...getInputProps("username")}
        />
        <div className="flex items-end flex-col">
          <PasswordInput
            className="w-full"
            size="md"
            label="Password"
            name="password"
            {...getInputProps("password")}
          />

          <Link
            className=" font-medium text-sm text-[#535353] mt-2"
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>
        <Checkbox
          variant="outline"
          className="font-medium mb-4"
          label="Remember my password"
          name="rememberMe"
          {...getInputProps("rememberMe")}
        />
        <Button
          type="submit"
          variant="filled"
          radius="xl"
          size="md"
          className="bg-[#c8dbe9] text-black shadow-md hover:bg-[#c8dbe9] hover:text-black "
        >
          Sign In
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;

const ErrorMessage = ({
  incorrectPassword,
}: {
  incorrectPassword: boolean;
}) => {
  if (!incorrectPassword) return null;

  return (
    <div className="bg-red-200 p-6 border border-[#c52e2b] rounded-lg mb-4">
      <h1 className="text-center text-xl font-semibold">
        Incorrect Email or Password
      </h1>
    </div>
  );
};
