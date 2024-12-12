import { useState } from "react";
import images from "../../images/images";
import { useAddUserStore } from "../../store";
import AddUserRow from "../addUser/AddUserRow";
import AdminTableHeader from "../adminPanel/table/AdminTableHeader";
import AdminTableRow from "../adminPanel/table/AdminTableRow";
type Props = {};

const UserTable = (props: Props) => {
  const handleNewUser = () => {
    setNewUser(true);
  };
  const handleNewUserRow = () => {
    setNewUser(false);
  };
  const [newUser, setNewUser] = useState(false);
  const addUser = useAddUserStore((state) => state.addUser);
  return (
    <div>
      <div className="flex  justify-between mx-auto items-center w-12/12 ">
        <div className="flex flex-row items-center">
          <button
            className="bg-dark-blue-color px-6 py-1 border rounded-3xl  text-white font-medium"
            onClick={handleNewUser}
          >
            +User
          </button>
        </div>
        <div className="flex">
          {/* <Input placeholder="Search By Name" />  added temporary  */}
          <button className="bg-header-color  border-2 border-[#7B8094] rounded-md p-2 mx-4">
            <img src={images.searchIcon} alt="" />
          </button>
        </div>
      </div>

      {/* table content  */}
      <AdminTableHeader />

      <AddUserRow
        handleNewUserRow={handleNewUserRow}
        setNewUser={setNewUser}
        newUser={newUser}
      />

      <AdminTableRow
        firstName="Pranjal"
        lastName="dutta"
        email="pranjal@kditsolutions.com"
        tempPassword="pranjal1234"
      />
      {addUser.map((user, index) => (
        <AdminTableRow
          key={index}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          tempPassword={user.tempPassword}
        />
      ))}
    </div>
  );
};

export default UserTable;
