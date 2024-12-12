import { useAuthStore } from "@/store/useAuthStore";
import { Button, Menu } from "@mantine/core";
import { notifications } from "@mantine/notifications";

const PostAuthDropDownMenu = () => {
  const { logOut } = useAuthStore();

  const handleClickSignOut = () => {
    logOut();
    notifications.show({
      title: `Logout successful  `,
      message: ``,
      position: "bottom-right",
    });
  };

  return (
    <div>
      <Menu shadow="md" width={200} trigger="hover">
        <Menu.Target>
          <Button
            color="#1f3f6f"
            className="group mx-3 rounded-2xl hover:bg-[#F4F6FE] hover:text-[#1f3f6f] "
          >
            <span className="flex items-center justify-center w-7 h-7 m-2  group-hover:bg-dark-blue-color rounded-full border-[1px] border-white bg-PostAuthHeader group-hover:text-white">
              A
            </span>
            Atul T
          </Button>
        </Menu.Target>

        <Menu.Dropdown
          color="#FFFFFF"
          className="border-1 rounded-2xl border-PostAuthHeader  bg-background "
        >
          <Menu.Item className="hover:bg-[#f2f0f7]">Settings</Menu.Item>
          <Menu.Item className="hover:bg-[#f2f0f7]">Help</Menu.Item>
          <Menu.Item className="hover:bg-[#f2f0f7]">Ver BQMAP 0.01</Menu.Item>
          <Menu.Item
            className="hover:bg-[#f2f0f7]"
            onClick={handleClickSignOut}
          >
            Sign Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default PostAuthDropDownMenu;
