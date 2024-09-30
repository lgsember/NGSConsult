import React from "react";
import "./textContent.css";

export const TextContent = ({ title, subtitle, description }) => {
  return (
    <div className="text-content">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <hr className="separator" />
      <p>{description}</p>
    </div>
  );
};
