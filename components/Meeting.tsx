"use client";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const initialValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};

const Meeting = () => {
  const router = useRouter();
  const [values, setValues] = useState(initialValues);
  const client = useStreamVideoClient();
  const { user } = useUser();
  const createMeeting = async () => {
    console.log("clicekd");
    if (!client || !user) return;
    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create meeting");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      console.log(call.id);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      // Meetin created toast
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      Meeting:
      <button onClick={createMeeting}>Create Meeting</button>
    </div>
  );
};

export default Meeting;
