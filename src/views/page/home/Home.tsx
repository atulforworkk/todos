import LightDarkButton from "@/components/Mode/LightDarkButton";
import { Input, Select, Textarea } from "@mantine/core";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      {/* Header */}
      <HomePageHeader />
      {/* homePageBody  */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-6 border-2 rounded-xl p-4 ">
          <div>
            <h1> Enter Task </h1>
            <Input placeholder="Search Task" ></Input>
            <Textarea label="Description " placeholder="example: to fix this keep in mind ......." />

            <Select
              label="Your favorite library"
              placeholder="Pick value"
              data={["Today", "Tommorow"]}
            />
          </div>
        </div>
        <div className="col-span-6 border rounded-xl">
          <h1>how are you ?</h1>
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
