import { Link } from "react-router-dom";

export default function ListUsers(props) {
  const userData = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: 61,
      startDate: "2011/04/25",
      salary: "320,800",
    },
    {
      id: 2,
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: 63,
      startDate: "2011/07/25",
      salary: "170,750",
    },
    {
      id: 3,
      name: "Ashton Cox",
      position: "Technical Author",
      office: "San Francisco",
      age: 66,
      startDate: "2009/01/12",
      salary: "86,000",
    },

    {
      id: 4,
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: 22,
      startDate: "2012/03/29",
      salary: "433,060",
    },
    {
      id: 5,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: 33,
      startDate: "2008/11/28",
      salary: "162,700",
    },
  ];
  return (
    <>
      <div class="container-fluid">
        <h1 class="h3 mb-2 text-gray-800">Registered Users</h1>
        <p class="mb-4">
          <Link to="/createuser">Create a new user</Link>
        </p>

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">User List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
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
                    <tr>
                      <td> {user.name}</td>
                      <td> {user.position}</td>
                      <td> {user.office}</td>
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
