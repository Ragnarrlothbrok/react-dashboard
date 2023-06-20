import React, { useState, useEffect } from "react";

const meetings = [
  {
    id: 1,
    title: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    details: "at Sunset Road, Kuta, Bali",
  },
  {
    id: 2,
    title: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    details: "at Central Jakarta.",
  },
];

const MeetingBoard = ({ title }) => {
  const [meetingData, setMeetingData] = useState([]);

  const simulateFetch = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(meetings);
      }, 100);
    });
  }

  const fakeFetch = async () => {
    const fetchedMeetings = await simulateFetch();
    setMeetingData(fetchedMeetings);
  }

  useEffect(() => {
    fakeFetch();
  }, []);

  const renderMeetings = () => {
    if (!meetingData.length) {
      return <div className="font-lato text-4xl">No meetings Today!</div>;
    }
    return meetings.map((meeting) => {
      return (
        <div
          key={meeting.id}
          className={`flex flex-col font-lato gap-y-1 text-sm text-[#666666] pl-3 mb-4 border-l-8 ${
            meeting.id % 2 ? "border-cyan-600" : "border-red-500"
          }`}
        >
          <h5 className="font-bold">{meeting.title}</h5>
          <p>{meeting.time}</p>
          <p>{meeting.details}</p>
        </div>
      );
    });
  };

  return (
    <div className="w-1/2 bg-white rounded-2xl py-7 px-10">
      <div className="flex justify-between mb-6">
        <h4 className="font-montserrat text-lg font-bold ">{title}</h4>
        <div className="border-none font-lato text-sm text-[#666666] self-center cursor-pointer">
          {" "}
          See All
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {renderMeetings}
      </div>
    </div>
  );
};

export default MeetingBoard;
