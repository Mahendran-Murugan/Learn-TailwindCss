import React from "react";

export const Button = ({ content }) => {
  return (
    <button className="text-sm font-medium bg-red-500 text-white px-4 py-2 rounded-md border-2 border-transparent hover:text-red-500 hover:bg-white hover:border-black  duration-500">
      {content}
    </button>
  );
};
