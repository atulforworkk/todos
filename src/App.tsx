import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";
import { useAuthStore } from "./store/useAuthStore";
import '@mantine/dates/styles.css';
const theme = createTheme({});

function App() {
  const { setAuthenticatedLocal } = useAuthStore();

  useEffect(() => {
    const prepareState = () => {
      setAuthenticatedLocal();
    };

    prepareState();
  }, [setAuthenticatedLocal]);

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
