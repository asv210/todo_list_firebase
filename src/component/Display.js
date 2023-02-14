import React from "react";

const Display = (props) => {
  return (
    <div className=" w-full ">
      <div className="flex my-4 ">
        <div className="h-10 mx-3 px-3 flex flex-row bg-white shadow-lg shadow-gray-500 w-10/12 rounded-2xl">
          <input
            // type="checkbox"
            checked={props.comple ? "checked" : ""}
            type="checkbox"
            onChange={() => props.toggleComplete(props)}
          />
          <h4 className="text-lg my-1 font-semibold font-mono tracking-wide mx-4">
            {props.task}
          </h4>
        </div>
        <div className="">
          <button
            className="  bg-[#073b4c] mx-2 font-bold text-white px-4 py-2 rounded-3xl  hover:bg-white hover:text-black"
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
