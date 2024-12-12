// import LoginHeaderButton from "@/components/common/Button/LoginHeaderButton";
import { Link, useMatch } from "react-router-dom";
import images from "../../images/images";
import Container from "../common/container/Container";
const PreAuthHeader = () => {
  const isRegisterPage = useMatch("register");

  //   const renderButton = () => {
  //     if (isRegisterPage)
  //       return (
  //         <LoginHeaderButton intent="register" path="/login">
  //           Sign in
  //         </LoginHeaderButton>
  //       );

  //     return (
  //       <LoginHeaderButton path="/register">14 Days free Trial</LoginHeaderButton>
  //     );
  //   };

  return (
    <div className="py-2 w-full bg-[#C8DBE9] flex justify-center">
      <Container>
        <div className="flex justify-between">
          <div className="img">
            <Link to="/login">
              <img src={images.logo} alt="" srcSet="" className="h-[50px]" />
            </Link>
          </div>
          <div className="flex items-center buttons">
            <button
              type="button"
              className="font-bold text-md hover:bg-dark-blue-color hover:text-white hover:py-2 hover:px-4 transition-all duration-300 ease-in-out"
            >
              Go to Website
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PreAuthHeader;
