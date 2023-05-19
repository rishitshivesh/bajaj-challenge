import React from "react";
import logo from "../../Assets/bajaj.svg";
import BasicCard from "../BasicCard/BasicCard";
import employees from "../../Assets/employees.svg";
import employeebg from "../../Assets/employeebg.svg";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="slide-in-bottom">
      {/* <Navbar /> */}
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row">
          <div className="flex flex-row w-[25vw] basis-1/4">
            <img src={logo} className="object-contain"></img>
          </div>
          <div className="flex flex-col basis-3/4 p-20 font-[Montserrat] text-xl gap-y-4">
            <div className="text-center text-3xl font-black">
              Welcome to Bajaj Finserv!
            </div>
            <div className="text-justify">
              We are a leading financial services company committed to
              empowering individuals and businesses to achieve their goals and
              dreams. With our wide range of innovative products and services,
              including personal loans, home loans, business loans, insurance,
              and investment solutions, we provide comprehensive financial
              solutions tailored to meet your specific needs. Our
              customer-centric approach, quick and hassle-free processes,
              competitive interest rates, and flexible repayment options make us
              the preferred choice for millions of customers across India.
              Experience financial freedom and security with Bajaj Finserv
              today!
            </div>
          </div>
        </div>
        <a href="/employees">
          <div className="flex flex-row justify-center w-screen">
            <BasicCard title="Employees" bg={employeebg} icon={employees} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
