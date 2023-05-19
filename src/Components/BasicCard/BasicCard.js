import React from "react";
// import Logo from "./Logo";

const BasicCard = ({ icon, title, bg }) => {
  return (
    <>
      <div
        className="w-[80vw] md:w-[35vw] lg:w-[20vw] rounded-[8vw]   md:rounded-[5vw] lg:rounded-[3vw] shadow-2xl py-10 md:m-10 flex flex-col gap-2 md:gap-4 bg-white "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div className="grid grid-cols-12 items-center gap-2 md:gap-4 lg:gap-2">
          <div className="bg-[#6086C3]  col-span-1 rounded-r-2xl h-[15vw] md:h-[8vw] lg:h-[5vw] w-[2vw] md:w-[1vw] lg:w-[0.5vw]"></div>

          <div className="col-span-11">
            <div className="col-span-11">
              <img src={icon} alt={icon} />
            </div>
          </div>
        </div>

        <div className="text-3xl font-lato font-bold pl-8 tracking-wide">
          <p>{title} </p>
        </div>
      </div>
    </>
  );
};

export default BasicCard;
