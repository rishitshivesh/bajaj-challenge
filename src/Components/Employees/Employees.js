import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
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
      <div className="text-2xl text-center">{employee?.name}</div>
      <div className="flex flex-row justify-evenly">
        {employee?.skills && (
          <div className="rounded-xl bg-blue-100 px-5 py-2 h-max w-max">
            <div className="font-bold">Skills</div>
            {employee?.skills?.map((item, idx) => {
              return <div>{item}</div>;
            })}
          </div>
        )}
        {employee?.projects && (
          <div className="rounded-xl bg-blue-100 px-5 py-2">
            <div className="font-bold">Projects</div>
            {employee?.projects?.map((item, idx) => {
              return (
                <div className="flex flex-col text-center border-2 border-black gap-y-2 rounded-2xl my-5">
                  {item?.name}
                  <div>{item?.description}</div>
                  <div>
                    {item?.tasks && (
                      <div>
                        Tasks
                        <table className="border-2 border-black mx-auto mb-5">
                          <thead>
                            <tr>
                              <td className="px-4">ID</td>
                              <td className="px-4">Name</td>
                              <td className="text-center px-4">Status</td>
                            </tr>
                          </thead>
                          <tbody>
                            {item.tasks.map((item, idx) => {
                              return (
                                <tr>
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
                        Team
                        <table className="border-2 border-black mx-auto mb-5">
                          <thead>
                            <tr>
                              <td className="px-4">Name</td>
                              <td className="text-center px-4">Role</td>
                            </tr>
                          </thead>
                          <tbody>
                            {item.team.map((item, idx) => {
                              return (
                                <tr>
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
  );
};

export default Employees;
