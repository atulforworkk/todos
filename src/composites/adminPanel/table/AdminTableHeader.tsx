import { Divider } from "@mantine/core";

type Props = {};

const AdminTableHeader = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 items-center  mx-auto font-semibold mt-4">
        <div className="col-span-2">First Name</div>
        <div className="col-span-2">Last Name</div>
        <div className="col-span-4">Email</div>
        <div className="col-span-1">User Role</div>
        <div className="col-span-2">Temp Password</div>
        <div className="col-span-1 flex justify-end"></div>
      </div>
      <Divider className=" mx-auto" />
    </div>
  );
};

export default AdminTableHeader;
