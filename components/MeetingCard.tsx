import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface MeetingCardProps {
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
}: MeetingCardProps) => {
  return (
    <div
      className={cn(
        "w-[250px] h-[220px] flex flex-col rounded-2xl items-center justify-between p-5 gap-5 cursor-pointer hover:opacity-80 ",
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
