import React, { useState } from "react";

function Dynamic() {
  const [input, setinput] = useState([
    {
      name: "",
      email: "",
      salary: "",
    },
  ]);
  let id = Math.floor(Math.random() * 100);

  const increment = () => {
    let obj = { name: "", email: "", salary: "", id };
    let ans = [...input, obj];
    setinput(ans);
  };

  const remove = (id) => {
    let rec = [...input];
    let deleterecord = rec.filter((val) => {
      return val.id !== id;
    });
    setinput(deleterecord);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", padding: "30px" }}>
        React - Add & Delete Table Rows Dynamically
      </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Full name</th>
            <th scope="col">Email address</th>
            <th scope="col">Salary</th>
            <th scope="col">
              <button
                type="button"
                onClick={increment}
                style={{
                  border: "2px solid green",
                  width: "50px",
                  height: "40px",
                }}
              >
                +
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {input.map((val, i) => {
            if (i == 0) {
              return (
                <tr>
                  <td>{val.id}</td>
                  <td>
                    <input
                      type="text"
                      placeholder="Name"
                      style={{ padding: "5px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Email"
                      style={{ padding: "5px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Salary"
                      style={{ padding: "5px" }}
                    />
                  </td>
                </tr>
              );
            }else{
                return (
                    <tr>
                      <td>{val.id}</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Name"
                          style={{ padding: "5px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Email"
                          style={{ padding: "5px" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Salary"
                          style={{ padding: "5px" }}
                        />
                      </td>
                      <td>
                      <button
                      type="button"
                      style={{
                        border: "2px solid red",
                        width: "50px",
                        height: "40px",
                        fontSize: "20px",
                      }}
                      onClick={() => remove(val.id)}
                    >
                      -
                    </button>
                      </td>
                    </tr>
                  );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dynamic;
