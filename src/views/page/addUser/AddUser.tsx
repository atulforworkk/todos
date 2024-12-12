import { useParams } from "react-router-dom";
import UserTable from "../../../composites/userTable/UserTable";

type Props = {};

const AddUser = (props: Props) => {
  const { Id } = useParams();
  console.log("🚀 ~ AddUser ~ id:", Id);
  return (
    <div>
      {/* // <div className="flex flex-col justify-center items-center h-[90vh] "> */}
      <div className="flex flex-col justify-center items-center h-[90vh] ">
        <UserTable />
      </div>
    </div>
  );
};

export default AddUser;
