import React from "react";
import "./iconLink.css";

export const IconLink = ({ icon: IconComponent, href, label }) => {
  return (
    <div className="icon-link">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <IconComponent size={28} />
        <span>{label}</span>
      </a>
    </div>
  );
};
