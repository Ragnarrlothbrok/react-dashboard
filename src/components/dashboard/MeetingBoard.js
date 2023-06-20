import React from "react";

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
  return (
    <div className="bg-white rounded-2xl py-7 px-10">
      <h4 className="font-montserrat text-lg font-bold mb-1">{title}</h4>
      <div className="flex flex-col">
        {meetings.map((meeting) => {
          return (
            <div key={meeting.id}>
              <h5>{meeting.title}</h5>
              <p>{meeting.time}</p>
              <p>{meeting.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetingBoard;
