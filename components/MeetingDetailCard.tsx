"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { avatarImages } from "@/constants/links";
import { useToast } from "@/hooks/use-toast";

interface MeetingDetailCard {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon1?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingDetailCard = ({
  icon,
  title,
  date,
  isPreviousMeeting = false,
  buttonIcon1,
  handleClick,
  link,
  buttonText = "Join",
}: MeetingDetailCard) => {
  const { toast } = useToast();

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      toast({ title: "Link Copied" });
    } catch (error) {
      console.error("Error copying link:", error);
      toast({
        title: "Failed to copy the link",
        description: "Please try again.",
      });
    }
  };

  return (
    <section className="flex min-h-[258px] w-full flex-col justify-between rounded-[14px] bg-bg-1 px-5 py-8 xl:max-w-[568px]">
      {/* Header Section */}
      <article className="flex flex-col gap-5">
        <Image
          src={icon}
          alt="Meeting icon"
          width={28}
          height={28}
          className="object-contain"
        />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>

      {/* Footer Section */}
      <article className="flex justify-center relative">
        {/* Avatars */}
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.slice(0, 5).map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Attendee ${index + 1}`}
              width={40}
              height={40}
              className={cn("rounded-full border-2 border-white", {
                absolute: index > 0,
              })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
          {avatarImages.length > 5 && (
            <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] ">
              +{avatarImages.length - 5}
            </div>
          )}
        </div>

        {/* Buttons */}
        {!isPreviousMeeting && (
          <div className="flex gap-2 text-black">
            <Button onClick={handleClick} className="rounded bg-blue-500 px-6">
              {buttonIcon1 && (
                <Image
                  src={buttonIcon1}
                  alt="Button icon"
                  width={20}
                  height={20}
                />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button onClick={handleCopyLink} className="bg-bg-2 px-6">
              <Image src="/copy.svg" alt="Copy link" width={20} height={20} />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingDetailCard;
