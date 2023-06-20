import React, { useState, useEffect } from "react";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import SideButton from "../common/SideButton";

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

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(() => resolve(meetings), ms));

  const fakeFetch = async () => {
    const fetchedMeetings = await sleep(1000);
    setMeetingData(fetchedMeetings);
  };

  //to give an effect of fetching.
  useEffect(() => {
    fakeFetch();
  }, []);

  const renderMeetings = () => {
    if (!meetingData.length) {
      return <div className="font-lato text-md">No meetings Today!</div>;
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
    <div className="w-1/2 bg-white rounded-2xl p-4 lg:py-7 lg:px-10">
      <div className="flex justify-between mb-6">
        <h4 className="font-montserrat text-base lg:text-lg font-bold">Today's schedule</h4>
        <SideButton text="See All" icon={<RightArrow />} />
      </div>
      <div className="flex flex-col">{renderMeetings()}</div>
    </div>
  );
};

export default MeetingBoard;
