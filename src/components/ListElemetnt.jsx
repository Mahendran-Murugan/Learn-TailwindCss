import React from "react";

export const ListElemetnt = ({ content }) => {
  return (
    <li>
      <a className="text-base uppercase font-semibold hover:text-red-400 cursor-pointer duration-500">
        {content}
      </a>
    </li>
  );
};
