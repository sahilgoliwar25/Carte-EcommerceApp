import axios from "axios";
import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";

function Dashboard() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`https://sg-carte-ecommerce-server.onrender.com/api/dashboard`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <Navbar />
      <div>
        <h1>This is Dashboard</h1>
      </div>
    </>
  );
}

export default Dashboard;
