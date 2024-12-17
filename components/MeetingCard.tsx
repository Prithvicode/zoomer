import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface MeetingCard {
  title: string;
  description: string;
  icon: string;
  setMeetingType?: () => void;
  color: string;
}
const MeetingCard = ({
  title,
  description,
  icon,
  setMeetingType,
  color,
}: MeetingCard) => {
  return (
    <div
      className={cn(
        "xl:w-[300px] max-xl:w-[250px] h-[220px]   lg: flex flex-col rounded-2xl items-center justify-between p-5 gap-5 cursor-pointer hover:opacity-80  max-md:w-full",
        color
      )}
      onClick={setMeetingType}
    >
      <div className="flex items-center flex-start w-full ">
        <Image src={icon} alt="instant" height={81} width={81} className=" " />
      </div>
      <div className="w-full">
        <p className="text-2xl font-bold ">{title}</p>
        <p className="text-md font-semibold ">{description}</p>
      </div>
    </div>
  );
};

export default MeetingCard;
