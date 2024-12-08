"use client";
import { useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

const MeetingSetup = () => {
  const [isMicCamOn, setisMicCamOn] = useState(false);
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

  return (
    <div>
      MeetingSetup:
      <VideoPreview />
      <div>
        <label>
          <input
            type="checkbox"
            checked={isMicCamOn}
            onChange={(e) => {
              setisMicCamOn(e.target.checked);
            }}
          />
          Join with mic and camera off
        </label>
      </div>
    </div>
  );
};

export default MeetingSetup;
