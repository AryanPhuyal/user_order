import React from "react";

const Index = () => {
  return (
    <div className="row justify-content-center align-content-center ">
      <div className="col-10 pt-4">
        <div className="row justify-content-center">
          <img
            className="rounded-circle"
            src="https://miro.medium.com/max/6300/1*U6CO5ZQS--WMSBovDT_VoQ.jpeg"
            alt="profile pic"
          />
        </div>
        <div className="pt-5 row justify-content-center ">
          <h1>Hello Aryan Phuyal</h1>
          <br />
          <button className="btn btn-block btn-warning">
            {" "}
            Change Password
          </button>
          <button className="btn btn-block btn-success"> Reset Password</button>
          <button className="btn btn-block btn-danger">
            Deactivate account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
