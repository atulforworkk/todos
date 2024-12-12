import PreAuthHeader from "../../../components/preAuthHeader/PreAuthHeader";
import Footer from "../../../composites/footer/Footer";
import LoginForm from "../../../composites/loginForm/LoginForm";
import images from "../../../images/images";

const Login = () => {
  return (
    <>
      <PreAuthHeader />
      <div className="h-[calc(100vh_-_90px)] bg-main-color flex items-center justify-center">
        <img src={images.animatedRegisterScreen} alt="" />
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default Login;
