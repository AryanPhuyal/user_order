import React, { useState } from "react";
import Model from "../../component/modal";
import AddUser from "../../component/addUser";
const Users = () => {
  const [adduser, setAdduser] = useState(false);
  const toggleAddUser = () => {
    setAdduser(!adduser);
  };
  return (
    <>
      {adduser && (
        <Model onClose={toggleAddUser}>
          <AddUser />
        </Model>
      )}
      <div className="row">
        <div className="col d-flex justify-content-end m-4">
          <button className="btn btn-primary" onClick={toggleAddUser}>
            Add User
          </button>
        </div>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>Admin</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>User</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>Super Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
