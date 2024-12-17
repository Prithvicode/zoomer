"use client";
import {
  DeviceSettings,
  useCall,
  useCallStateHooks,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Alert } from "./ui/alert";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamOn, setisMicCamOn] = useState(false);

  const { useCallStartsAt } = useCallStateHooks();
  const callStartsAt = useCallStartsAt();
  // const callEndedAt = useCallEndedAt();
  const callTimeNotArrived =
    callStartsAt && new Date(callStartsAt) > new Date();

  const call = useCall();
  if (!call) {
    throw new Error("Usecall must be within StreamCall Component meeting/[id]");
  }
  useEffect(() => {
    if (isMicCamOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable(); //  permission given
      call?.microphone.enable();
    }
  }, [isMicCamOn, call?.camera, call?.microphone]);

  if (callTimeNotArrived)
    return (
      <Alert
        title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
      />
    );

  return (
    <div className="h-screen w-full  flex flex-col items-center justify-center ">
      <VideoPreview />
      <div className="flex items-center gap-6 h-11 ">
        <label className="flex gap-2">
          <input
            type="checkbox"
            checked={isMicCamOn}
            onChange={(e) => {
              setisMicCamOn(e.target.checked);
            }}
          />
          Join with mic and camera off
        </label>

        <DeviceSettings />
      </div>
      <Button
        onClick={() => {
          call.join();
          //   Setup Done
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
