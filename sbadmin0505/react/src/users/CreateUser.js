import TextField from "./TextField";
import UserContext from "../usercontext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function CreateUser() {
  const userData = useContext(UserContext);
  const history = useHistory();

  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [age, setAge] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [salary, setSalary] = useState(0);
  const [submit, setSubmit] = useState("");

  let userSubmit = async () => {    
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
    await fetch("https://6093bd12a7e53a0017951767.mockapi.io/users", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        name,
        position,
        location,
        age,
        startDate,
        salary,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    setSubmit("1 User Created");
    setId((id) => id + 1);
    history.push("/users");
  };

  // Yup validation for Formik
  const validate = Yup.object({
    fullName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    employeePosition: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    officeLocation: Yup.string()
      .max(55, "Must be 55 characters or less")
      .required("Required"),
    employeeAge: Yup.number()
      .min(18, "Must be older than 18")
      .max(65, "Must be younger than 65")
      .required("Required"),
    officeStartDate: Yup.date()
      .max(new Date(), "Must be earlier than today")
      .required("required")
      .nullable(),
    employeeSalary: Yup.number()
      .min(3000, "Must be USD 3000 or more")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        fullName: "",
        employeePosition: "",
        officeLocation: "",
        employeeAge: "",
        officeStartDate: null,
        employeeSalary: "",
      }}
      validationSchema={validate}
      onSubmit={userSubmit}
    >
      {(formik) => (
        <>
          <h1 className="h3 my-3">Create User</h1>
          <h5 className="h5 my-3 text-center text-primary">{submit}</h5>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Form>
                  <div className="form-row">
                    <TextField
                      label="Full Name"
                      name="fullName"
                      type="text"
                      value={name}
                      onInput={(e) => setName(e.target.value)}
                    />
                    <TextField
                      label="Position / Designation"
                      name="employeePosition"
                      type="text"
                      value={position}
                      onInput={(e) => setPosition(e.target.value)}
                    />
                    <TextField
                      label="Office Location"
                      name="officeLocation"
                      type="text"
                      value={location}
                      onInput={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <TextField
                      label="Age"
                      name="employeeAge"
                      type="number"
                      value={age}
                      onInput={(e) => setAge(e.target.value)}
                    />
                    <TextField
                      label="Employment Start Date"
                      name="officeStartDate"
                      value={startDate}
                      type="date"
                      onInput={(e) => setStartDate(e.target.value)}
                    />
                    <TextField
                      label="Current Salary"
                      name="employeeSalary"
                      value={salary}
                      type="number"
                      onInput={(e) => setSalary(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
}
