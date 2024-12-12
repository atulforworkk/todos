import Home from "@/page/home/Home";
import Login from "@/page/login/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

]);

export default router;
