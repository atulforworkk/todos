import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container max-w-6xl">{children}</div>;
};

export default Container;
