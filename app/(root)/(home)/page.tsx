import Meeting from "@/components/Meeting";
import MeetingCard from "@/components/MeetingCard";
import React, { useState } from "react";

const Home = () => {
  const now = new Date();
  const currentTime = now.toLocaleTimeString("en-Us", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-Us", { dateStyle: "full" }).format(
    now
  );

  return (
    <div className="relative bg-bg-1 w-full  h-[300px] rounded-lg ">
      <div className="bg-heroImg  w-full h-[300px] bg-cover rounded-lg -z-10 text-slate-950 text-xl font-bold p-6 flex justify-between ">
        <div className="absolute inset-0 size-full bg-white/40 rounded-lg -z-1"></div>
        <div className="relative z-10 flex flex-col gap-3  h-full justify-around px-9 ">
          <h2 className="bg-bg-1/30 p-2 pr-7 rounded-lg w-fit text-blue-700">
            Connect With Your Friends{" "}
          </h2>
          <div>
            <h2 className="bg-gradient-to-t from-blue-600 to-blue-950 bg-clip-text text-transparent">
              {date}
            </h2>
            <h2 className="text-8xl font-extrabold z-10 bg-gradient-to-r from-blue-500  to-blue-950 bg-clip-text text-transparent">
              {currentTime}
            </h2>
          </div>
        </div>
        <div className="relative px-12 bg-bg-1/50 rounded-lg flex flex-col gap-7 text-blue-950 text-center justify-center">
          <h2>TODAY</h2>
          <h2 className="text-8xl text-blue-700">15</h2>
          <p>Meetings</p>
        </div>
      </div>

      <Meeting />
      <div className="flex  gap-5">
        {/* <MeetingCard
          title="Instant Meeting"
          description="Start Meeting Now"
          setMeetingType={() => setMeetingType("Instant Meeting")}
          color="bg-blue-400"
          icon="/Home.svg"
        /> */}
        {/* <MeetingCard />
        <MeetingCard /> */}
      </div>
    </div>
  );
};

export default Home;
