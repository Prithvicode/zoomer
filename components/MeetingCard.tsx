import Image from "next/image";
import React from "react";

const MeetingCard = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-400 to-blue-800 w-[250px] h-[250px] flex flex-col rounded-2xl items-center justify-center p-8 gap-5 ">
      <div className="flex items-center p-6 bg-white/20 border-2  justify-center rounded-2xl">
        <Image
          src={"/Home.svg"}
          alt="instant"
          height={36}
          width={36}
          className=""
        />
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold ">Instant Meeting</p>
        <p className="text-md font-semibold ">Start Meeting Now</p>
      </div>
    </div>
  );
};

export default MeetingCard;
