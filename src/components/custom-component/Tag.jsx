import React from "react";

function Tag({ keyValue }) {
  return (
    <div className="m-3">
      <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-4 py-4 rounded dark:bg-blue-900 dark:text-blue-300">  {`${keyValue.key}: ${keyValue.value}`}</span>
    </div>
  );
}

export default Tag;
