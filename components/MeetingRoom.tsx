"use client";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React from "react";
import Loader from "./Loader";

const MeetingRoom = () => {
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    // return <SpeakerLayout participantsBarPosition="left" />;
    return <PaginatedGridLayout />;
  };

  return (
    <div className="bg-blue-500 ">
      MeetingRoom:
      <div>
        <CallLayout />
        <CallParticipantsList onClose={() => console.log("layout type")} />

        <CallControls onLeave={() => console.log("leave")} />
        <CallStatsButton />
      </div>
    </div>
  );
};

export default MeetingRoom;
