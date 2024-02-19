import React from "react";

function Tag({ keyValue }) {
  console.log(keyValue);
  return (
    <div className="bg-slate-400 from-neutral-950 block m-3 rounded-md p-3">
      <p>{`${keyValue.key}: ${keyValue.value}`}</p>
    </div>
  );
}

export default Tag;
