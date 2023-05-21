import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
const Employees = ({ data }) => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  useEffect(() => {
    if (data) {
      setEmployee(data.find((item) => item.id == id));
    }
  }, [data, id]);

  //   console.log(employee, id);
  return (
    <div>
      <Navbar />
      <div className="text-center font-bold text-3xl my-10">Employee</div>
      {/* <div className="text-2xl text-center">{employee?.name}</div> */}
      <div className="flex flex-row justify-evenly">
        <div className="border-2 border-black rounded-xl h-max p-5 flex flex-col">
          <div className="text-[10rem]">
            <FaUserCircle />
          </div>
          <div className="text-center">
            <div className="font-bold text-center text-[2rem]">
              {employee?.name}
            </div>
            <div className="text-[1.5rem]">Emp. {employee?.id}</div>
            <div>
              {employee?.designation
                ? employee.designation
                : "Designation Undefined"}
            </div>
          </div>
          {employee?.skills && (
            <div className="rounded-xl border-2 border-black my-5 px-5 py-2 h-max w-full text-center justify-center">
              <div className="font-bold">Skills</div>
              {employee?.skills?.map((item, idx) => {
                return <div>{item}</div>;
              })}
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap">
          {employee?.projects && (
            <div className="rounded-xl px-5 py-2">
              <div className="font-bold">Projects</div>
              {employee?.projects?.map((item, idx) => {
                return (
                  <div className="flex flex-col p-4 text-center border-2 border-black gap-y-2 rounded-2xl my-5">
                    <span className="underline font-bold">{item?.name}</span>
                    <div>{item?.description}</div>
                    <div>
                      {item?.tasks && (
                        <div>
                          <span className="underline">Tasks</span>
                          <table className="border-2 border-black mx-auto mb-5">
                            <thead>
                              <tr className="font-bold">
                                <td className="px-4">ID</td>
                                <td className="px-4">Name</td>
                                <td className="text-center px-4">Status</td>
                              </tr>
                            </thead>
                            <tbody>
                              {item.tasks.map((item, idx) => {
                                return (
                                  <tr className="odd:bg-[#00000120]">
                                    <td className="px-4">{item.id}</td>
                                    <td className="px-4">{item.name}</td>
                                    <td className="text-center px-4">
                                      {item.status}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                    <div>
                      {item?.team && (
                        <div>
                          <span className="underline">Team</span>

                          <table className="border-2 border-black mx-auto mb-5">
                            <thead>
                              <tr className="font-bold">
                                <td className="px-4">Name</td>
                                <td className="text-center px-4">Role</td>
                              </tr>
                            </thead>
                            <tbody>
                              {item.team.map((item, idx) => {
                                return (
                                  <tr className="odd:bg-[#00000120]">
                                    <td className="px-4">{item.name}</td>
                                    <td className="px-4">{item.role}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Employees;
