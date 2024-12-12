import { useState } from "react";
import AdminTableHeader from "../adminPanel/table/AdminTableHeader";
import AdminTableRow from "../adminPanel/table/AdminTableRow";
import AddUserRow from "./AddUserRow";
type Props = {};

const AddUserTable = (props: Props) => {
  const handleNewUser = () => {
    setNewUser(true);
  };
  const handleNewUserRow = () => {
    setNewUser(false);
  };
  const [newUser, setNewUser] = useState(false);
  return (
    <div>
      <div className="">
        <div className="flex  justify-between mx-auto items-center w-10/12">
          <div className="flex flex-row items-center">
            <button
              className="bg-dark-blue-color px-6 py-1 border rounded-3xl  text-white font-medium"
              onClick={handleNewUser}
            >
              +User
            </button>
            <button className="bg-header-color  border-2 border-[#7B8094] rounded-md p-2 mx-4">
              <img src={images.searchIcon} alt="" />
            </button>
          </div>
          <button className="bg-dark-blue-color px-6 py-1 border rounded-3xl  text-white font-medium">
            Add All
          </button>
        </div>
        {/* table content  */}
        <AdminTableHeader />

        <AddUserRow
          handleNewUserRow={handleNewUserRow}
          setNewUser={setNewUser}
          newUser={newUser}
        />
        <AdminTableRow />
        <AdminTableRow />
        <AdminTableRow />
        <AdminTableRow />
      </div>
    </div>
  );
};

export default AddUserTable;
