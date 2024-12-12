import { useLocation, useNavigate } from "react-router-dom";
import OrganizationDropDown from "../../components/organizationDropDown/OrganizationDropDown";
import PostAuthDropDownMenu from "../../components/postAuthDropDownMenu/PostAuthDropDownMenu";
import images from "../../images/images";

const PostAuthHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOnOrganizationPage = location.pathname === "/";

  const handleClickUser = (Id: number) => {
    navigate(`/${Id}/add-user`);
  };
  const handleClickOrganization = () => {
    navigate("/");
  };

  return (
    <div className="h-[7vh] bg-dark-blue-color flex justify-between items-center ">
      <div className=" rounded flex flex-row items-center ">
        <img
          src={images.postAuthLogo}
          className="bg-[#F7F7F7] rounded w-[120px] h-10 m-2"
          alt=""
        />
        <OrganizationDropDown />
        {isOnOrganizationPage ? (
          <button
            className="bg-dark-blue-color text-sm font-semibold border-white border rounded-lg text-white mx-6 hover:text-dark-blue-color hover:bg-gray-300 h-8 w-24 "
            onClick={() => handleClickUser(2)}
          >
            Add User
          </button>
        ) : (
          <button
            className="bg-dark-blue-color text-sm font-semibold border-white border rounded-lg text-white mx-6 hover:text-dark-blue-color hover:bg-gray-300 h-8 w-32 "
            onClick={handleClickOrganization}
          >
            Add Organization
          </button>
        )}
      </div>
      <div>
        <PostAuthDropDownMenu />
      </div>
    </div>
  );
};

export default PostAuthHeader;
