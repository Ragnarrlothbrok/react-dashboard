import React from "react";

export default function SearchBar() {
  return (
    <form className="max-w-[180px] px-4 h-7">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full text-sm font-normal h-7 pl-4 px-4 pr-12 text-[#B0B0B0] border rounded-[10px] outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-3 h-3 my-auto text--gray right-3"
          fill="none"
          viewBox="0 0 20 20"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </form>
  );
}