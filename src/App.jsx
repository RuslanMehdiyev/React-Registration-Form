import React, { useState } from "react";
import List from "./List";

function App() {
  const [data, setData] = useState({});
  const [register, setRegister] = useState([]);
  const getInputValue = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const getSubmit = (e) => {
    e.preventDefault();
    setRegister([...register, data]);
    e.target.reset();
  };
  console.log(register);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Registration Form</h1>

      <div className="row">
        <form onSubmit={(e) => getSubmit(e)}>
          <div className="col-12">
            <div className="row">
              <div className="col-6 mt-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  required
                  onChange={(e) => getInputValue(e)}
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  className="form-control"
                  required
                  onChange={(e) => getInputValue(e)}
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="form-control"
                  required
                  onChange={(e) => getInputValue(e)}
                />
              </div>
              <div className="col-6 mt-2">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="form-control"
                  required
                  onChange={(e) => getInputValue(e)}
                />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-2">
              <button className="btn btn-success w-25">Submit</button>
            </div>
          </div>
        </form>
        <div className="col-12">
          <table className="table table-dark table-striped table-bordered table-hover mt-2">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Surname</td>
                <td>Age</td>
                <td>Phone</td>
              </tr>
            </thead>
            <tbody>
              {register.map((index, key) => (
                <List
                  key={key}
                  num={key + 1}
                  name={index.name}
                  surname={index.surname}
                  age={index.age}
                  phone={index.phone}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
