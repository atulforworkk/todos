import { Button, Menu } from "@mantine/core";
// import { useAppDispatch, useAppSelector } from "@/services/store/store";
// import Loader from "../common/loader/Loader";
// import { setCurrentProject } from "@/reducers/config/config";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useOrganizationStore } from "../../store";

type Props = {};

const OrganizationDropDown = (props: Props) => {
  // const [filteredProjects, setFilteredProjects] = useState(projects);
  const { pathname } = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  //   const dispatch = useAppDispatch();
  //   const { list } = useAppSelector((state) => state.project.names);
  //   const { currentProjectId } = useAppSelector((state) => state.config);

  // const handleChange = (e) => {
  //   const searchValue = e.target.value.toLowerCase();

  //   const filteredProjects = projects.filter((project) => {
  //     return project.label.toLowerCase().includes(searchValue);
  //   });

  //   setFilteredProjects(filteredProjects);
  // };

  //   const handleSelectProject = (projectId: number) => {
  //     dispatch(setCurrentProject(projectId));

  //     const path = pathname.replace(/\/project\/\d+/, `/project/${projectId}`);

  //     navigate(path, { replace: true });
  //   };
  const { Organization } = useOrganizationStore();
  const [selectedOrganization, setSelectedOrganization] =
    useState<string>("Organization Name");
  const handleSelectOrganization = (organizationName: string) => {
    setSelectedOrganization(organizationName);
    // You can also navigate or perform other actions here if needed
  };

  // const selectedProject = useMemo(
  //   () => (list ? list.find((project) => project.id === currentProjectId) : {}),
  //   [list, currentProjectId]
  // );

  //   if (!currentProjectId || (list && list.length <= 0) || !selectedProject) {
  //     return <Loader height="fit" />;
  //   }

  return (
    <div className="rounded-md bg-white">
      <Menu shadow="md" width={300}>
        <Menu.Target>
          <Button
            variant="white"
            style={{ width: "300px" }}
            className="flex justify-between "
            size="xs"
            color="white"
          >
            <div className="bg-white text-sm font-normal text-black ">
              {/* {selectedProject ? selectedProject.name : ""} */}
              {selectedOrganization}
            </div>
            <p>{"^"}</p>
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          {Organization &&
            Organization.map((project, index) => {
              return (
                <Menu.Item
                  key={index}
                  onClick={() => handleSelectOrganization(project.label)}
                >
                  {project.label}
                </Menu.Item>
              );
            })}

          {/* <Menu.Divider /> */}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default OrganizationDropDown;

const projects = [
  {
    id: 1,
    label: "VistaraCorp",
    name: "VistaraCorp",
  },
  {
    id: 2,
    label: "Friesen, Renner and Armstrong",
    name: "Friesen, Renner and Armstrong",
  },
  {
    id: 3,
    label: "Ward and Sons",
    name: "Ward and Sons",
  },
  {
    id: 4,
    label: "Wunsch and Sons",
    name: "Wunsch and Sons",
  },
];
