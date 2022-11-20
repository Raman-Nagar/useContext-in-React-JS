import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { textcotext } from "./Value";

export default function AxiosFunctional() {
  let [data, setData] = useState([]);

  const r = useContext(textcotext);

  function Getdata() {
    axios
      .get("http://localhost:3000/db.json")
      .then((res) => setData(res.data.products))
      .catch(console.log);
  }
  useEffect(() => {
    Getdata();
  });
  function Formsubmit(e) {
    axios("http://localhost:4001/products", {
      method: "POST",
      data: {
        name: r.inp1,
        userid: r.inp2,
        address: r.inp3,
      },
      headers: { "Content-Type": "application/json" },
    });

    e.preventDefault();
  }

  function ListUpdat(e) {
    axios(`http://localhost:4001/products/${e.target.value}`, {
      method: "PUT",
      data: {
        name: r.inp1,
        userid: r.inp2,
        address: r.inp3,
      },
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });
    e.preventDefault();
  }
  function ListDelet(e) {
    axios(`http://localhost:4001/products/${e.target.value}`, {
      method: "DELETE",
      headers: { "content-type": "application/json; charset=UTF-8" },
    });
    e.preventDefault();
  }
  return (
    <>
      <button onClick={(e) => Formsubmit(e)} className="btn btn-primary">
        submit
      </button>
      <table className="table table-striped border border-4 m-auto">
        <thead>
          <tr className="border bg-info">
            <th>Id</th>
            <th>Name</th>
            <th>Userid</th>
            <th>Address</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => {
            return (
              <tr key={x.id} className="border">
                <th>{x.id}</th>
                <th>{x.name}</th>
                <th>{x.userid}</th>
                <th>{x.address}</th>
                <td>
                  <button
                    className="btn btn-success rounded"
                    onClick={(e) => ListUpdat(e)}
                    value={x.id}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger rounded"
                    onClick={(e) => ListDelet(e)}
                    value={x.id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
