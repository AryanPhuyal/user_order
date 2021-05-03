import React, { useState } from "react";
import Input from "../component/input";
const Login = () => {
  const [login, setlogin] = useState(false);
  const [items, setItems] = useState([
    {
      login: false,
      signup: true,
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
      login: false,
      signup: true,
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
      login: true,
      signup: true,
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
      login: true,
      signup: true,
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
      login: true,
      formType: "button",
      className: "btn-primary",
      onClick: () => {},
      name: "Login",
    },
    {
      signup: true,
      formType: "button",
      className: "btn-primary",
      onClick: () => {},
      name: "Sign Up",
    },
  ]);

  return (
    <div
      style={{
        height: "100vh",
      }}
      className="row justify-content-center align-content-center"
    >
      <div className="col-sm col-lg-6 col-md-8">
        <div className="form">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center ">
                {" "}
                {login ? "Login" : "Sign Up"}
              </h5>
              <form>
                {login &&
                  items.filter((x) => x.login).map((x) => <Input item={x} />)}
                {!login &&
                  items.filter((x) => x.signup).map((x) => <Input item={x} />)}
              </form>
              <i>
                <div
                  onClick={() => setlogin(!login)}
                  className="text-end text-muted mt-3"
                  style={{ textAlign: "right" }}
                >
                  {login
                    ? "Dont Have An account? create One"
                    : "Already have an account? Login"}
                </div>
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
