import CallList from "@/components/CallList";
import React from "react";

const UpcomingPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-3 ">Upcoming Meetings: </h1>
      <CallList type="upcoming" />
    </div>
  );
};

export default UpcomingPage;
