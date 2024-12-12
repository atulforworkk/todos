import { Input } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useFormik } from "formik";
import * as Yup from "yup";
import images from "../../images/images";
import { useAddUserStore } from "../../store";

const validationSchema = Yup.object().shape({
  username: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});
type Props = {
  handleNewUserRow: () => void;
  setNewUser: React.Dispatch<React.SetStateAction<boolean>>;
  newUser: boolean;
};

const AddUserRow = ({ handleNewUserRow, setNewUser, newUser }: Props) => {
  const addingUser = useAddUserStore((state) => state.addingUser);
  const addUser = useAddUserStore((state) => state.addUser);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      TempPassword: "",
    },
    //       username: "ankur@kditsolutions.com",
    //       password: "Kdit2023!",
    validationSchema,
    onSubmit: async (values) => {},
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;
  console.log("🚀 ~ AddUserRow ~ values:", values);
  const handleNewUserClick = () => {
    setNewUser(false);
  };
  const handleAddNewUser = () => {
    addingUser({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      tempPassword: values.TempPassword,
    });
    notifications.show({
      title: `User Added successfully `,
      message: ``,
      position: "bottom-right",
    });
    console.log("user sucessfully added");
  };
  return newUser ? (
    <div>
      <div>
        <div className="grid grid-cols-12 gap-4 items-center w-12/12 mx-auto font-semibold p-2 bg-[#E7F2F8] m-1">
          <div className="col-span-2">
            <Input
              type="text"
              id="firstName"
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
            />
          </div>
          <div className="col-span-2">
            <Input
              type="text"
              id="lastName"
              onChange={handleChange}
              value={values.lastName}
              onBlur={handleBlur}
            />
          </div>
          <div className="col-span-4">
            <Input
              type="text"
              id="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
          </div>
          <div className="col-span-1 "></div>
          <div className="col-span-2">
            <Input
              type="text"
              id="TempPassword"
              onChange={handleChange}
              value={values.TempPassword}
              onBlur={handleBlur}
            />
          </div>
          <div className="col-span-1 flex justify-end">
            <button
              className="bg-[#1A8227] p-1.5 rounded-full m-1"
              // onClick={() => setNewUser(false)}
              onClick={handleAddNewUser}
            >
              <img src={images.tickIcon} alt="Tick" />
            </button>
            <button
              className="bg-[#D03625] p-1.5 rounded-full m-1"
              onClick={handleNewUserClick}
            >
              <img src={images.cancelIcon} alt="Cancel" />
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default AddUserRow;
