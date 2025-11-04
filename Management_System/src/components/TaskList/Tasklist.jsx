import React from "react";

/** Utility: format 'Oct 16, 2025' safely, or show as-is if parsing fails */
function formatDateLabel(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

const priorityStyles = {
  High: "bg-red-500 text-white",
  Medium: "bg-amber-500 text-black",
  Low: "bg-emerald-500 text-black",
};

function PriorityBadge({ level = "High" }) {
  const cls =
    priorityStyles[level] ??
    "bg-zinc-200 text-zinc-900"; 
  return (
    <span
      className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-bold tracking-wide ${cls}`}
      aria-label={`Priority: ${level}`}
    >
      {level}
    </span>
  );
}

function TaskCard({ task }) {
  return (
    <article
      className="group relative flex flex-col rounded-lg border border-white/15 bg-zinc-900/70 p-4 text-white shadow-sm ring-1 ring-white/5 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-white/30"
      tabIndex={0}
      aria-labelledby={`task-${task.id}-title`}
    >
      <header className="mb-3 flex items-center justify-between text-sm">
        <PriorityBadge level={task.priority} />
        <time
          className="text-gray-400"
          dateTime={task.dueISO ?? task.due}
          aria-label={`Due date ${task.due}`}
        >
          {formatDateLabel(task.due)}
        </time>
      </header>

      <h3
        id={`task-${task.id}-title`}
        className="mb-1 text-lg font-bold leading-snug"
        title={task.title}
      >
        {task.title}
      </h3>

      <p className="text-sm leading-snug text-gray-300 line-clamp-4">
        {task.description}
      </p>

      {/* Optional footer/actions slot */}
      {task.tags?.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {task.tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-gray-300"
            >
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

const DEFAULT_TASKS = [
  {
    id: 1,
    priority: "High",
    due: "Oct 16, 2025",
    title: "UI Review & Dashboard Layout",
    description:
      "Complete the comprehensive UI review for the new dashboard layout. Ensure component alignment, consistent padding, color balance, and overall visual hierarchy are optimized for both desktop and tablet screens.",
    tags: ["UI", "Design Audit"],
  },
  {
    id: 2,
    priority: "High",
    due: "Oct 15, 2025",
    title: "API Integration Update",
    description:
      "Update the task management API integration to include new endpoints for task filtering and pagination. Test all API calls and ensure proper error handling in both frontend and backend logic.",
    tags: ["Backend", "Pagination"],
  },
  {
    id: 3,
    priority: "High",
    due: "Oct 14, 2025",
    title: "Bug Fixes & Theme Enhancement",
    description:
      "Resolve all reported UI inconsistencies and refine the color palette. Add a dark/light theme toggle and ensure the entire interface supports smooth transitions between modes.",
    tags: ["Theming", "Bugs"],
  },
  {
    id: 4,
    priority: "High",
    due: "Oct 13, 2025",
    title: "Mobile Responsiveness",
    description:
      "Test the full layout on multiple mobile screen sizes. Adjust spacing, margins, and text scaling to ensure consistent usability across all breakpoints from 360px and above.",
    tags: ["Responsive"],
  },
  {
    id: 5,
    priority: "High",
    due: "Oct 12, 2025",
    title: "Navigation & Sidebar Animation",
    description:
      "Finalize smooth transition animations for the sidebar and navigation bar. Optimize CSS animations for better performance and ensure accessibility compliance with reduced motion preferences.",
    tags: ["Animation", "A11y"],
  },
  {
    id: 6,
    priority: "High",
    due: "Oct 11, 2025",
    title: "Documentation & Deployment",
    description:
      "Prepare and upload the complete technical documentation to GitHub. Include setup instructions, environment details, and API usage notes for future contributors and QA teams.",
    tags: ["Docs", "DevOps"],
  },
];

const TaskList = ({ tasks = DEFAULT_TASKS }) => {
  return (
    <section
      id="TaskList"
      aria-label="Task List"
      className="w-full h-full p-4 text-white"
    >
      <div
        className="
          grid grid-flow-col auto-cols-[85%] gap-4 overflow-x-auto pb-2 snap-x snap-mandatory
          sm:auto-cols-[65%]
          md:grid-flow-row md:auto-cols-auto md:grid-cols-2 md:overflow-visible md:snap-none
          lg:grid-cols-3
          2xl:grid-cols-4
        "
      >
        {tasks.map((t) => (
          <div key={t.id} className="snap-start md:snap-none">
            <TaskCard task={t} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskList;
