import React from "react";
import Input from "../Input";

const From = () => {
  return (
    <>
      <Input type="text" label="User name" />
      <Input type="numbers" label="User Age" />
      <Input type="radio" label="You are robot ?" />
      <Input type="chechbox" label="Confirm ?" />
    </>
  );
};

export default From;
