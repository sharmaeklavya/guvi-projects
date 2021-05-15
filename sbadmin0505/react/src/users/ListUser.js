import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import UserContext from "../usercontext";

export default function ListUsers() {
  // const users = useContext(UserContext);

  const [userList, setUserList] = useState([]);
  // use effect
  useEffect(() => {
    async function fetchData() {
      const getPromise = await fetch(
        "https://6093bd12a7e53a0017951767.mockapi.io/users"
      );
      const getData = await getPromise.json();
      setUserList([...getData]);
    }
    fetchData()
  }, []);

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
                {userList.length > 0 ? (
                  <>
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
                      {userList.map((user) => (
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
                  </>
                ) : (
                  <>                    
                    <thead>
                      <tr>
                        <td className="h6">Loading...</td>
                      </tr>
                    </thead>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
