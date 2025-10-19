import React from "react";

const TaskListNumber = () => {
  return (
    <div className="text-white flex justify-center flex-wrap gap-6 p-6 w-full">
      <div className="border border-white w-[40vw] max-w-xs flex flex-col items-center justify-center py-6 bg-zinc-900 cursor-pointer">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-sm text-gray-300 mt-1">New Task</h3>
      </div>

      <div className="border border-white w-[40vw] max-w-xs flex flex-col items-center justify-center py-6 bg-zinc-900 cursor-pointer">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-sm text-gray-300 mt-1">Completed</h3>
      </div>

      <div className="border border-white w-[40vw] max-w-xs flex flex-col items-center justify-center py-6 bg-zinc-900 cursor-pointer">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-sm text-gray-300 mt-1">Accepted</h3>
      </div>

      <div className="border border-white w-[40vw] max-w-xs flex flex-col items-center justify-center py-6 bg-zinc-900 cursor-pointer">
        <h2 className="text-3xl font-bold">0</h2>
        <h3 className="text-sm text-gray-300 mt-1">Failed</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
