import React from "react";

const Tasklist = () => {
  return (
    <div
      id="TaskList"
      className="h-full overflow-x-auto w-full flex flex-nowrap gap-5 p-4 text-white place-content-start"
    >
      <div className="shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white flex items-center justify-center text-lg rounded-xl bg-teal-200 text-black font-semibold">
        Card 1
      </div>

      <div className="shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white flex items-center justify-center text-lg rounded-xl bg-teal-200 text-black font-semibold">
        Card 2
      </div>

      <div className="shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white flex items-center justify-center text-lg rounded-xl bg-teal-200 text-black font-semibold">
        Card 3
      </div>

      <div className="shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white flex items-center justify-center text-lg rounded-xl bg-teal-200 text-black font-semibold">
        Card 4
      </div>

      <div className="shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white flex items-center justify-center text-lg rounded-xl bg-teal-200 text-black font-semibold">
        Card 5
      </div>

      <div className="shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white flex items-center justify-center text-lg rounded-xl bg-teal-200 text-black font-semibold">
        Card 6
      </div>
    </div>
  );
};

export default Tasklist;
