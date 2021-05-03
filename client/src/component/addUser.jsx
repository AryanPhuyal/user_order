import React, { useState } from "react";
import Input from "./input";
const AddUser = () => {
  const [items, setItems] = useState([
    {
      formType: "input",
      name: "firstname",
      placeholder: "FirstName",
      validation: [{ min: 2, max: 10 }],
      label: "First Name",
      type: "text",
      value: "",
      error: "",
      clicked: false,
    },
    {
      formType: "input",
      name: "lastname",
      placeholder: "Last Name",
      validation: [{ min: 2, max: 3 }],
      label: "Last Name",
      type: "text",
      value: "",
      error: "",
      clicked: false,
    },

    {
      formType: "input",
      name: "email",
      placeholder: "test@test.com",
      validation: [{ email: true }],
      label: "Email",
      type: "email",
      value: "",
      error: "",
      clicked: false,
    },

    {
      formType: "input",
      name: "password",
      placeholder: "password",
      validation: [{ min: 4 }],
      label: "password",
      type: "password",
      value: "",
      error: "",
      clicked: false,
    },
    {
      formType: "button",
      className: "btn-primary",
      onClick: () => {},
      name: "Login",
    },
  ]);
  return (
    <div>
      <form>
        {items
          .filter((x) => x.login)
          .map((x) => (
            <Input item={x} />
          ))}
      </form>
    </div>
  );
};

export default AddUser;
