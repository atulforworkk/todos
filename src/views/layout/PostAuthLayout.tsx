import PostAuthHeader from "@/composites/postAuthHeader/PostAuthHeader";
import { Outlet } from "react-router-dom";

const PostAuthLayout = () => {
  // const { setAuthenticated, setUser, clearUser } = useAuthStore();

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const token = localStorage.getItem("authToken");
  //     if (token) {
  //       try {
  //         const response = await axios.get("/profile"); // Endpoint to fetch user profile
  //         setUser(response.data);
  //         setAuthenticated(true);
  //       } catch (error) {
  //         clearUser();
  //         localStorage.removeItem("authToken");
  //       }
  //     }
  //   };

  //   fetchUser();
  // }, [setAuthenticated, setUser, clearUser]);      

  return (
    <>
      <PostAuthHeader />
      <Outlet />
    </>
  );
};``

export default PostAuthLayout;
