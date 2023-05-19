import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
const Employees = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Navbar />
      <div className="px-10">
        <div className="text-2xl font-bold py-5 text-center ">Employees</div>
        <div className="flex flex-row gap-4 flex-wrap justify-center">
          {data &&
            data.map((item, idx) => {
              return (
                <a key={idx} href={"/employees/" + item.id}>
                  <div className="px-5 py-5 rounded-xl bg-blue-100 flex flex-col text-center justify-center items-center">
                    <div className="text-3xl">
                      <FaUserCircle />
                    </div>
                    <div className="font-bold text-2xl">{item?.name}</div>
                    <div>Emp. {item?.id}</div>
                    <div>{item?.designation}</div>
                  </div>
                </a>
              );
            })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Employees;
