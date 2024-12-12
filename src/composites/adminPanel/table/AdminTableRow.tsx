type Props = {
  firstName: string;
  lastName: string;
  email: string;
  tempPassword: string;
};

const AdminTableRow = ({ firstName, lastName, email, tempPassword }: Props) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 items-center w-12/12 mx-auto font-semibold p-2 bg-row-color m-1">
        <div className="col-span-2 text">{firstName}</div>
        <div className="col-span-2"> {lastName}</div>
        <div className="col-span-4">{email}</div>
        <div className="col-span-1 bg-[#E4E8EC] font-medium px-2 py-1 border rounded-3xl text-center">
          QA Tester
        </div>
        <div className="col-span-2">{tempPassword}</div>
        <div className="col-span-1 flex justify-end">
          <button className="bg-dark-blue-color px-6 py-1 border rounded-3xl  text-white font-medium">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminTableRow;
