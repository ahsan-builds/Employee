import React from "react";

const Tasklist = () => {
  return (
    <div
      id="TaskList"
      className="w-full h-full flex flex-wrap md:flex-nowrap gap-5 p-4 text-white place-content-start overflow-x-auto"
    >
      {/* Card 1 */}
      <div className="shrink-0 w-full sm:w-[45vw] md:w-[28vw] lg:w-[25vw] border border-white bg-zinc-950 text-white font-semibold p-4 flex flex-col">
        <div className="flex justify-between text-sm font-bold mb-3">
          <span className="bg-white text-black px-2 py-0.5">High</span>
          <span className="text-gray-400">Oct 16, 2025</span>
        </div>
        <h3 className="text-lg font-bold mb-1">UI Review & Dashboard Layout</h3>
        <p className="text-sm text-gray-300 leading-snug">
          Complete the comprehensive UI review for the new dashboard layout.
          Ensure component alignment, consistent padding, color balance, and
          overall visual hierarchy are optimized for both desktop and tablet
          screens.
        </p>
      </div>

      {/* Card 2 */}
      <div className="shrink-0 w-full sm:w-[45vw] md:w-[28vw] lg:w-[25vw] border border-white bg-zinc-950 text-white font-semibold p-4 flex flex-col">
        <div className="flex justify-between text-sm font-bold mb-3">
          <span className="bg-white text-black px-2 py-0.5">High</span>
          <span className="text-gray-400">Oct 15, 2025</span>
        </div>
        <h3 className="text-lg font-bold mb-1">API Integration Update</h3>
        <p className="text-sm text-gray-300 leading-snug">
          Update the task management API integration to include new endpoints
          for task filtering and pagination. Test all API calls and ensure
          proper error handling in both frontend and backend logic.
        </p>
      </div>

      {/* Card 3 */}
      <div className="shrink-0 w-full sm:w-[45vw] md:w-[28vw] lg:w-[25vw] border border-white bg-zinc-950 text-white font-semibold p-4 flex flex-col">
        <div className="flex justify-between text-sm font-bold mb-3">
          <span className="bg-white text-black px-2 py-0.5">High</span>
          <span className="text-gray-400">Oct 14, 2025</span>
        </div>
        <h3 className="text-lg font-bold mb-1">
          Bug Fixes & Theme Enhancement
        </h3>
        <p className="text-sm text-gray-300 leading-snug">
          Resolve all reported UI inconsistencies and refine the color palette.
          Add a dark/light theme toggle and ensure the entire interface supports
          smooth transitions between modes.
        </p>
      </div>

      {/* Card 4 */}
      <div className="shrink-0 w-full sm:w-[45vw] md:w-[28vw] lg:w-[25vw] border border-white bg-zinc-950 text-white font-semibold p-4 flex flex-col">
        <div className="flex justify-between text-sm font-bold mb-3">
          <span className="bg-white text-black px-2 py-0.5">High</span>
          <span className="text-gray-400">Oct 13, 2025</span>
        </div>
        <h3 className="text-lg font-bold mb-1">Mobile Responsiveness</h3>
        <p className="text-sm text-gray-300 leading-snug">
          Test the full layout on multiple mobile screen sizes. Adjust spacing,
          margins, and text scaling to ensure consistent usability across all
          breakpoints from 360px and above.
        </p>
      </div>

      {/* Card 5 */}
      <div className="shrink-0 w-full sm:w-[45vw] md:w-[28vw] lg:w-[25vw] border border-white bg-zinc-950 text-white font-semibold p-4 flex flex-col">
        <div className="flex justify-between text-sm font-bold mb-3">
          <span className="bg-white text-black px-2 py-0.5">High</span>
          <span className="text-gray-400">Oct 12, 2025</span>
        </div>
        <h3 className="text-lg font-bold mb-1">
          Navigation & Sidebar Animation
        </h3>
        <p className="text-sm text-gray-300 leading-snug">
          Finalize smooth transition animations for the sidebar and navigation
          bar. Optimize CSS animations for better performance and ensure
          accessibility compliance with reduced motion preferences.
        </p>
      </div>

      {/* Card 6 */}
      <div className="shrink-0 w-full sm:w-[45vw] md:w-[28vw] lg:w-[25vw] border border-white bg-zinc-950 text-white font-semibold p-4 flex flex-col">
        <div className="flex justify-between text-sm font-bold mb-3">
          <span className="bg-white text-black px-2 py-0.5">High</span>
          <span className="text-gray-400">Oct 11, 2025</span>
        </div>
        <h3 className="text-lg font-bold mb-1">Documentation & Deployment</h3>
        <p className="text-sm text-gray-300 leading-snug">
          Prepare and upload the complete technical documentation to GitHub.
          Include setup instructions, environment details, and API usage notes
          for future contributors and QA teams.
        </p>
      </div>
    </div>
  );
};

export default Tasklist;
