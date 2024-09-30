import React from "react";

export const TextAbout = ({ pbold, pcommon }) => {
  return (
    <div className="flex flex-col pb-6">
      <p className="font-bold text-base text-blue-900 m-0 self-start">{pbold}</p>
      <p className="text-blue-600 text-sm mt-2 self-center text-center">{pcommon}</p>
    </div>
  );
};
