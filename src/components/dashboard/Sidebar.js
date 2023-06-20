import React from "react";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard_icon.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/schedule_icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/setting_icon.svg";
import { ReactComponent as TransactionIcon } from "../../assets/transaction_icon.svg";
import { ReactComponent as UserIcon } from "../../assets/user_icon.svg";

const SideBar = () => {
  return (
    <div className="hidden md:block md:w-1/5 relative flex flex-col bg-black text-white rounded-[30px] p-[20px] lg:px-[50px] lg:py-[60px]">
      <h1 className="text:sm lg:text-4xl font-bold mb-4 lg:mb-[60px]	">
        Board.
      </h1>
      <ul>
        <li className="flex mb-2 lg:mb-10 text-sm lg:text-lg items-center font-bold cursor-pointer">
          <DashboardIcon className="mr-2 lg:mr-4" />
          Dashboard
        </li>
        <li className="flex mb-2 lg:mb-10 text-sm lg:text-lg items-center font-normal	cursor-pointer">
          <ScheduleIcon className="mr-2 lg:mr-4" />
          Transactions
        </li>
        <li className="flex mb-2 lg:mb-10 text-sm lg:text-lg items-center font-normal cursor-pointer">
          <SettingIcon className="mr-2 lg:mr-4" />
          Schedules
        </li>
        <li className="flex mb-2 lg:mb-10 text-sm lg:text-lg items-center font-normal cursor-pointer">
          <TransactionIcon className="mr-2 lg:mr-4" />
          Users
        </li>
        <li className="flex mb-2 lg:mb-10 text-sm lg:text-lg items-center font-normal cursor-pointer">
          <UserIcon className="mr-2 lg:mr-4" />
          Settings
        </li>
      </ul>
      <ul className="absolute bottom-2 lg:bottom-10">
        <li className="mb-2 lg:mb-5 text-xs lg:text-lg font-normal	cursor-pointer">
          Help
        </li>
        <li className="mb-2 lg:mb-5 text-xs lg:text-lg font-normal	cursor-pointer">
          Contact Us
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
