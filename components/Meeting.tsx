"use client";
import { toast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import MeetingModal from "./MeetingModal";
import ReactDatePicker from "react-datepicker";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import Loader from "./Loader";

const initialmeetingFormData = {
  dateTime: new Date(),
  description: "",
  link: "",
};

type MeetingType =
  | "isScheduleMeeting"
  | "isJoiningMeeting"
  | "isInstantMeeting"
  | undefined;

const Meeting = () => {
  const router = useRouter();
  const [meetingType, setMeetingType] = useState<MeetingType>(undefined);
  const [meetingFormData, setMeetingFormData] = useState(
    initialmeetingFormData
  );
  const [callDetail, setCallDetail] = useState<Call>();

  const client = useStreamVideoClient();
  const { user } = useUser();

  // MEETING CREATION
  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create meeting");
      const startsAt =
        meetingFormData.dateTime.toISOString() ||
        new Date(Date.now()).toISOString();
      const description = meetingFormData.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      // console.log(call.id);
      setCallDetail(call);
      if (!meetingFormData.description) {
        router.push(`/meeting/${call.id}`);
      }
      // Meetin created toast
      toast({
        title: "Meeting created successfully.",
      });
    } catch (error) {
      console.error(error);
      toast({ title: "Failed to create Meeting" });
    }
  };
  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;
  return (
    <section className="grid grid-cols-1 gap-11 md:grid-cols-2 xl:grid-cols-4">
      {/* Meeting:
      <button onClick={createMeeting}>Create Meeting</button> */}
      <MeetingCard
        title="Instant Meeting"
        description="Start Meeting Now"
        setMeetingType={() => setMeetingType("isInstantMeeting")}
        color="bg-blue-400"
        icon="/Home.svg"
      />
      <MeetingCard
        title="Join Meeting"
        description="via Link"
        setMeetingType={() => setMeetingType("isJoiningMeeting")}
        color="bg-blue-400"
        icon="/Home.svg"
      />
      <MeetingCard
        title="Schedule Meeting"
        description="Plan meeting"
        setMeetingType={() => setMeetingType("isScheduleMeeting")}
        color="bg-blue-400"
        icon="/Home.svg"
      />

      {!callDetail ? (
        <MeetingModal
          isOpen={meetingType === "isScheduleMeeting"}
          onClose={() => setMeetingType(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) =>
                setMeetingFormData({
                  ...meetingFormData,
                  description: e.target.value,
                })
              }
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={meetingFormData.dateTime}
              onChange={(date) =>
                setMeetingFormData({ ...meetingFormData, dateTime: date! })
              }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingType === "isScheduleMeeting"}
          onClose={() => setMeetingType(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link Copied" });
          }}
          image={"/icons/checked.svg"}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meetingType === "isJoiningMeeting"}
        onClose={() => setMeetingType(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(meetingFormData.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) =>
            setMeetingFormData({ ...meetingFormData, link: e.target.value })
          }
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingType === "isInstantMeeting"}
        onClose={() => setMeetingType(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default Meeting;
