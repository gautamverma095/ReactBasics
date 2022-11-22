import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Statewise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");

    const data = await res.json();
    console.log(data.statewise);
    setData(data.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h3 className="mb-5 text-center">
            <span className="font-weight-bold"> INDIA </span>COVID-19 Dashboard
          </h3>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => {
                return (
                  <tr key={index}>
                    <th>{el.state}</th>
                    <th>{el.confirmed}</th>
                    <th>{el.recovered}</th>
                    <th>{el.deaths}</th>
                    <th>{el.active}</th>
                    <th>{el.lastupdatedtime}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
