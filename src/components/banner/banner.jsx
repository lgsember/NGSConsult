import React from "react";

export const Banner = ({ src, alt, height, width }) => {
  return (
    <div className="banner">
      <img 
        src={src} 
        alt={alt} 
        style={{ height: height, width: width }}
      />
    </div>
  );
};
