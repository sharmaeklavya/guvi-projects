import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../usercontext";

export default function ListUsers(props) {
  const users = useContext(UserContext);

  const userData = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      location: "Edinburgh",
      age: 61,
      startDate: "2011/04/25",
      salary: "320,800",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      location: "Tokyo",
      age: 63,
      startDate: "2011/07/25",
      salary: "170,750",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <h1 className="h3 mb-2 text-gray-800">Registered Users</h1>
        <p className="mb-4">
          <Link to="/createuser">Create a new user</Link>
        </p>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">User List</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => (
                    <tr key={user.id}>
                      <td> {user.name}</td>
                      <td> {user.position}</td>
                      <td> {user.location}</td>
                      <td> {user.age}</td>
                      <td> {user.startDate}</td>
                      <td> {user.salary}</td>
                      <td>
                        <Link to={"/updateuser/" + user.id}>Update</Link>
                      </td>
                    </tr>
                  ))}
                  {users.userList.map((user) => (
                    <tr key={user.id}>
                      <td> {user.name}</td>
                      <td> {user.position}</td>
                      <td> {user.location}</td>
                      <td> {user.age}</td>
                      <td> {user.startDate}</td>
                      <td> {user.salary}</td>
                      <td>
                        <Link to={"/updateuser/" + user.id}>Update</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
