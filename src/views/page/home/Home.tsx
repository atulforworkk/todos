import LightDarkButton from "@/components/Mode/LightDarkButton";
import TaskList from "@/components/taskList/TaskList";
import NewTask from "@/composites/newTask/NewTask";
import { Input } from "@mantine/core";
import { useState } from "react";


type Props = {};

const Home = (props: Props) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div>
      {/* Header */}
      <HomePageHeader />
      {/* homePageBody  */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <NewTask   />
        <div className="col-span-6 border rounded-xl">
          <TaskList value="First task" description="lorem50"/>
          <TaskList value="Second Task " description="Try to complete this task by today"/>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const HomePageHeader = () => {
  return (
    <div className="p-4 flex justify-between">
      <h1 className="text-2xl font-semibold"> Todos </h1>
      <Input placeholder="Search Task" className="w-4/12"></Input>
      <LightDarkButton />
    </div>
  );
};
