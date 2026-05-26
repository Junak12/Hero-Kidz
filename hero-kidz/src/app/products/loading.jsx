import React from "react";
const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      {/* title skeleton */}
      <div className="text-center mb-10">
        <div className="h-8 w-48 bg-slate-700/40 mx-auto rounded animate-pulse"></div>
        <div className="h-4 w-72 bg-slate-700/30 mx-auto mt-3 rounded animate-pulse"></div>
      </div>

      {/* grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="border border-slate-700/50 rounded-lg overflow-hidden"
          >
            {/* image skeleton */}
            <div className="h-[250px] bg-slate-700/30 animate-pulse"></div>

            <div className="p-4 space-y-3">
              <div className="h-4 bg-slate-700/30 rounded w-3/4 animate-pulse"></div>

              <div className="h-3 bg-slate-700/20 rounded w-full animate-pulse"></div>

              <div className="h-3 bg-slate-700/20 rounded w-2/3 animate-pulse"></div>

              <div className="h-6 bg-slate-700/30 rounded w-1/2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
