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
        "w-[250px] h-[250px] flex flex-col rounded-2xl items-center justify-center p-8 gap-5 cursor-pointer",
        color
      )}
      onClick={setMeetingType}
    >
      <div className="flex items-center p-6 bg-white/20 border-2  justify-center rounded-2xl">
        <Image src={icon} alt="instant" height={36} width={36} className="" />
      </div>
      <div className="text-center">
        <p className="text-2xl font-bold ">{title}</p>
        <p className="text-md font-semibold ">{description}</p>
      </div>
    </div>
  );
};

export default MeetingCard;
