import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
// import API from "./Services/axios";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
// import Navbar from "./Components/Navbar/Navbar";
import bg from "./Assets/bg.svg";
import Employees from "./Pages/Employees";
import Employee from "./Components/Employees/Employees";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json"
      )
      .then((data) => {
        setData(data.data.employees);
      });
  }, []);

  console.table(data);
  return (
    <div
      className="min-h-screen min-w-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees data={data} />} />
          <Route path="/employees/:id" element={<Employee data={data} />} />
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
