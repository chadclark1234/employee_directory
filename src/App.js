import React, { useMemo, useState, useEffect } from "react";
import Table from "./components/Table";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
const BASEURL = "https://randomuser.me/api/?results=10&nat=us";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios(BASEURL);
      setData(data.results);
    })();
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "Employee Directory",
        columns: [
          {
            Header: "Picture",
            Cell: (row) => {
              console.log(row);
              return (
                <img alt="profile" src={row.row.original.picture.thumbnail} />
              );
            },
          },
          {
            Header: "Name",
            Cell: (row) => {
              return (
                <span>
                  {row.row.original.name.first} {row.row.original.name.last}
                </span>
              );
            },
          },
          {
            Header: "Phone",
            accessor: "phone",
          },
          {
            Header: "email",
            accessor: "email",
          },
        ],
      },
    ],
    []
  );
  return (
    <div className="App">
      <Header />
      <Table columns={columns} data={data} />
    </div>
  );
}
export default App;
