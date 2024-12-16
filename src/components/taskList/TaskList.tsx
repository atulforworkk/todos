import React from "react";
import { Accordion, Button } from "@mantine/core";
type Props = {
  value: string;
  description: string;
};

const TaskList = ({ value, description }: Props) => {
  return (
    <Accordion radius="lg" chevronPosition="left" defaultValue="Apples">
      <Accordion.Item value={value}>
        <Accordion.Control >
          <div className="flex justify-between items-center"><h1>
          {value}
          </h1>
          <div className="flex flex-row gap-4">
          <Button>
            Edit
          </Button>
          <Button>
            Completed
          </Button>
          </div>
          </div>
        </Accordion.Control>
        <Accordion.Panel>{description}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default TaskList;
