import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
const Employees = ({ data }) => {
  console.log(data);
  const [search, setSearch] = React.useState("");

  const searchFunction = (name) => {
    let tempData = data.filter((item) => {
      return item.name;
    });
    console.log(tempData);
    let temp = tempData.filter((item) => {
      console.log(item.name, name);
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
    // setFilteredData(temp);
    console.log(temp);
    return temp;
  };

  const [filteredData, setFilteredData] = React.useState(data);

  const handleSearch = (e) => {
    setFilteredData(searchFunction(search));
  };

  const clearSearch = () => {
    setFilteredData(data);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  return (
    <div>
      <Navbar />
      <div className="px-10">
        <div className="text-2xl font-bold py-5 text-center ">Employees</div>
        <div className="flex flex-row my-5 justify-center gap-x-5">
          <input
            className="border-2 border-gray-300 rounded-xl px-5 py-2 w-[70%]"
            placeholder="Search by Name"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            className="px-2 bg-blue-100 flex flex-row items-center justify-center rounded-xl cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </div>
          <div
            className="px-2 bg-blue-100 flex flex-row items-center justify-center rounded-xl cursor-pointer"
            onClick={clearSearch}
          >
            Clear
          </div>
        </div>
        <div className="flex flex-row gap-4 flex-wrap justify-center">
          {data &&
            filteredData.map((item, idx) => {
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
