import React from "react";

const Tasklist = () => {
  return (
    <div
      id="TaskList"
      className="h-full overflow-x-auto w-full flex flex-nowrap gap-5 p-4 text-white place-content-start"
    >
      {/* Card 1 */}
      <div className="relative shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white rounded-xl bg-zinc-950 text-white font-semibold p-4 flex flex-col justify-between">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-red-500">High</span>
          <span className="text-gray-400">Oct 16, 2025</span>
        </div>
        <p className="text-sm text-gray-300 self-start mt-auto">
          Complete the UI review for dashboard layout.
        </p>
      </div>

      {/* Card 2 */}
      <div className="relative shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white rounded-xl bg-zinc-950 text-white font-semibold p-4 flex flex-col justify-between">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-red-500">High</span>
          <span className="text-gray-400">Oct 15, 2025</span>
        </div>
        <p className="text-sm text-gray-300 self-start mt-auto">
          Update API integration for task management.
        </p>
      </div>

      {/* Card 3 */}
      <div className="relative shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white rounded-xl bg-zinc-950 text-white font-semibold p-4 flex flex-col justify-between">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-red-500">High</span>
          <span className="text-gray-400">Oct 14, 2025</span>
        </div>
        <p className="text-sm text-gray-300 self-start mt-auto">
          Fix minor bugs and add new color scheme.
        </p>
      </div>

      {/* Card 4 */}
      <div className="relative shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white rounded-xl bg-zinc-950 text-white font-semibold p-4 flex flex-col justify-between">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-red-500">High</span>
          <span className="text-gray-400">Oct 13, 2025</span>
        </div>
        <p className="text-sm text-gray-300 self-start mt-auto">
          Test mobile responsiveness and adjust padding.
        </p>
      </div>

      {/* Card 5 */}
      <div className="relative shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white rounded-xl bg-zinc-950 text-white font-semibold p-4 flex flex-col justify-between">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-red-500">High</span>
          <span className="text-gray-400">Oct 12, 2025</span>
        </div>
        <p className="text-sm text-gray-300 self-start mt-auto">
          Finalize the navigation and sidebar animations.
        </p>
      </div>

      {/* Card 6 */}
      <div className="relative shrink-0 w-[30vw] h-[22vh] sm:h-[25vh] md:h-[30vh] border border-white rounded-xl bg-zinc-950 text-white font-semibold p-4 flex flex-col justify-between">
        <div className="flex justify-between text-sm font-bold">
          <span className="text-red-500">High</span>
          <span className="text-gray-400">Oct 11, 2025</span>
        </div>
        <p className="text-sm text-gray-300 self-start mt-auto">
          Prepare documentation and upload on GitHub.
        </p>
      </div>
    </div>
  );
};

export default Tasklist;
