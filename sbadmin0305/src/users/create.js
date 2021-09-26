import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../usercontext";

export default function CreateUser() {
  const userData = useContext(UserContext);
  const history = useHistory();

  const [id, setId] = useState(3);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [salary, setSalary] = useState(0);
  const [submit, setSubmit] = useState("");

  const submitInfo = () => setSubmit((submit) => (submit = "1 user created"));

  let userSubmit = (e) => {
    e.preventDefault();
    userData.setUserList([
      ...userData.userList,
      {
        id: id,
        name,
        position,
        location,
        age,
        startDate,
        salary,
      },
    ]);
    submitInfo();
    setId((id) => id + 1);
    history.push("/users");
  };

  return (
    <>
      <h1 className="h3 my-3">Create User</h1>
      <h5 className="h5 my-3 text-center text-primary">{submit}</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={userSubmit}>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="State name of the user"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPosition">Position</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPosition"
                    placeholder="State position of the user"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputOffice">Office Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputOffice"
                    placeholder="i.e. London"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label for="inputAge">Age</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputAge"
                    min="18"
                    max="85"
                    placeholder="i.e. 28"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputStartDate">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputStartDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputSalary">$ Salary</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputSalary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
