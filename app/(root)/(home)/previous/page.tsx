import CallList from "@/components/CallList";
import React from "react";

const PreviousPage = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-2 ">Previous Meetings: </h1>
      <CallList type="ended" />
    </div>
  );
};

export default PreviousPage;
