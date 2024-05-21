import React from "react";

export const Icon = ({ icon, tooltip = "tool tip!" }) => {
  return (
    <div className="icons group">
      {icon}
      <span className="tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
};
