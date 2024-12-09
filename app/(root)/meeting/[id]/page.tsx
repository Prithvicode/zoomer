"use client";

import { use, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Icon, StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams, useRouter } from "next/navigation";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";

const MeetingPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { user, isLoaded } = useUser();
  const { id } = use(params);
  // Setup
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <Loader />;
  return (
    <main className="h-screen w-full flex bg-red-500 flex-col ">
      Meeting
      <StreamCall call={call}>
        <StreamTheme>
          {isSetupComplete ? (
            <MeetingRoom />
          ) : (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default MeetingPage;
