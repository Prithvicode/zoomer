"use client";

import { Call } from "@stream-io/video-react-sdk";

import Loader from "./Loader";

import { useRouter } from "next/navigation";
import { useGetCalls } from "@/hooks/useGetCalls";
import MeetingDetailCard from "./MeetingDetailCard";

const CallList = ({ type }: { type: "ended" | "upcoming" }) => {
  const router = useRouter();
  const { endedCalls, upcomingCalls, isLoading } = useGetCalls();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;

      case "upcoming":
        return upcomingCalls;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "upcoming":
        return "No Upcoming Calls";
      default:
        return "";
    }
  };

  if (isLoading) return <Loader />;

  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call) => (
          <MeetingDetailCard
            key={(meeting as Call).id}
            icon="/icons8-fast-forward-48.svg"
            title={
              (meeting as Call).state?.custom?.description || "No Description"
            }
            date={
              (meeting as Call).state?.startsAt?.toLocaleString() || "No Date"
            }
            link={`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
              (meeting as Call).id
            }`}
            isPreviousMeeting={type === "ended"}
            buttonText={type === "upcoming" ? "Start" : undefined}
            handleClick={() => router.push(`/meeting/${(meeting as Call).id}`)}
          />
        ))
      ) : (
        <h1 className="text-2xl font-bold ">{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
