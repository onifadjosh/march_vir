import axios from "axios";
import React, { useEffect, useState } from "react";

const Fetchh = () => {
  let url = import.meta.env.VITE_BASE_URL;

  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const makeRequest = async () => {
      //  let response= await fetch(`${url}/users`)

      //  let data = await response.json()

      //  console.log(data);

      //  setusers(data)

      try {
        let response = await axios.get(`${url}/users`);
        console.log(response.data);

        setusers(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
        alert("problem fetching users");
        setloading(false);
      }
    };

    makeRequest();
  }, []);
  return (
    <div className="d-flex gap-3 flex-wrap">
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        users.map((_, idx) => (
          <div className="card" style={{ width: "18rem" }} key={idx}>
            <div className="card-body">
              <h5 className="card-title">{_.name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                {_.username}
              </h6>
              <p className="card-text">{_.email}</p>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Fetchh;
