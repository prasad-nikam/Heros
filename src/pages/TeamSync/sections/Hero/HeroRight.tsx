import React from "react";
import { cn } from "@/lib/utils";

const HeroRight = () => {
  return (
    <>
      <div className="mt-20 flex flex-1 flex-col items-start">
        <div>
          <div className="w-90 font-light text-neutral-100">
            Visualize your team's structure with ease , asigning roles and
            responsibilities for each project,a nd get a clear overview of who's
            working on what.
          </div>
          <button
            className={cn(
              "mt-2 cursor-pointer rounded-full border-x border-purple-200 px-6 py-3 font-light text-neutral-100",
              "bg-[radial-gradient(transparent_0%,var(--color-purple-200)_150%)]",
              "hover:bg-[radial-gradient(transparent_0%,var(--color-purple-200)_100%)]",
            )}
          >
            Discover More
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroRight;
