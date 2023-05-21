import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import Select from "react-select";

const Employees = ({ data }) => {
  console.log(data);
  const [search, setSearch] = React.useState("");
  const skillsOptions = [
    { value: "SQL", label: "SQL" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Photoshop", label: "Photoshop" },
    { value: "Manual Testing", label: "Manual Testing" },
    { value: "Java", label: "Java" },
  ];

  const [selectedSkills, setSelectedSkills] = React.useState([]);
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

  // const handleSearch = (e) => {
  //   // setFilteredData(searchFunction(search));
  // };

  const clearSearch = () => {
    setSearch("");
    setFilteredData(data);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const [designation, setDesignation] = React.useState("");
  const [skills, setSkills] = React.useState("");

  const handleDesignationFilter = (e) => {
    if (designation == "Clear") {
      setFilteredData(data);
      return;
    } else {
      let tempData = data.filter((item) => {
        return item.designation;
      });
      console.log(tempData);
      let temp = tempData.filter((item) => {
        console.log(item.designation, designation);
        return item.designation
          .toLowerCase()
          .includes(designation.toLowerCase());
      });
      setFilteredData(temp);
    }
  };

  const handleSkillsFilter = (e) => {
    // skills is an array of strings

    let tempData = data.filter((item) => {
      return item.skills;
    });
    console.log(tempData);
    let temp = tempData.filter((item) => {
      console.log(item.skills, skills);
      return item.skills.includes(skills);
    });
    setFilteredData(temp);
  };

  const [dataDesignations, setDataDesignations] = React.useState([]);
  const [dataSkills, setDataSkills] = React.useState(["Python", "Java"]);

  useEffect(() => {
    let tempData = data.filter((item) => {
      return item.designation;
    });
    let temp = tempData.map((item) => {
      return item.designation;
    });
    setDataDesignations([...new Set(temp)]);
  }, [data]);

  // filter skills

  useEffect(() => {
    var temp = [];
    data.map((item) => {
      console.log(item.skills);
      if (item.skills && item.skills != "undefined") {
        temp.push(...item.skills);
      }
    });
    setDataSkills([...new Set(temp)]);
  }, [data]);

  useEffect(() => {
    if (selectedSkills.length > 0 && !search) {
      console.log(selectedSkills);
      var tempData = data.filter((item) => {
        return item.skills;
      });
      var skills = selectedSkills.map((item) => {
        return item.value;
      });
      var temp = tempData.filter((item) => {
        console.log(item.skills, skills);
        return skills.some((skill) => item.skills.includes(skill));
      });
      setFilteredData(temp);
    } else if (selectedSkills.length > 0 && search) {
      console.log(selectedSkills);
      var tempData = data.filter((item) => {
        return item.skills && item.name;
      });
      var skills = selectedSkills.map((item) => {
        return item.value;
      });
      var temp = tempData.filter((item) => {
        // console.log(item.skills, skills);
        return skills.some((skill) => item.skills.includes(skill));
      });
      console.log(temp);
      if (temp.length > 0) {
        var temp2 = temp.filter((item) => {
          console.log(item.name, search);
          return item.name.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredData(temp2);
      } else {
        setFilteredData([]);
      }
    } else if (search) {
      setFilteredData(searchFunction(search));
    } else {
      setFilteredData(data);
    }
  }, [selectedSkills, search]);
  return (
    <div>
      <Navbar />
      <div className="px-10">
        <div className="text-2xl font-bold py-5 text-center ">Employees</div>
        <div className="flex flex-row my-5 justify-center gap-x-5">
          <input
            className="border-2 border-gray-300 rounded-xl px-5 py-2 w-[70%]"
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <div
            className="px-2 bg-blue-100 flex flex-row items-center justify-center rounded-xl cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </div> */}
          <div
            className="px-2 bg-blue-100 flex flex-row items-center justify-center rounded-xl cursor-pointer"
            onClick={clearSearch}
          >
            Clear
          </div>
          {/* Two dropsdowns of all skills and designations */}
        </div>
        <div className="flex flex-row justify-evenly">
          <div className="relative flex flex-row gap-x-3">
            <select
              className="border-2 border-gray-300 rounded-xl px-5 py-2 w-[70%]"
              onChange={(e) => setDesignation(e.target.value)}
            >
              {dataDesignations.map((item, idx) => {
                return <option key={idx}>{item}</option>;
              })}
              {/* <option>Clear</option>   */}
            </select>
            <div
              className="px-2 bg-blue-100 flex flex-row items-center justify-center rounded-xl cursor-pointer"
              onClick={handleDesignationFilter}
            >
              Filter
            </div>
            <div
              className="px-2 bg-blue-100 flex flex-row items-center justify-center rounded-xl cursor-pointer"
              onClick={() => {
                setFilteredData(data);
              }}
            >
              Clear
            </div>
          </div>

          <Select
            isMulti
            name="skills"
            placeholder="Select Skills"
            options={skillsOptions}
            className="w-[40vw]"
            onChange={(e) => {
              setSelectedSkills(e);
            }}
          />
        </div>
        <div className="flex flex-row gap-4 flex-wrap justify-center mt-5">
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
                    <div>{item?.skills?.join(", ")}</div>
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
