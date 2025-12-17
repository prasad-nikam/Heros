import React from 'react'
import { cn } from "@/lib/utils"

const HeroRight = () => {
  return (
    <>
       <div className="flex-1 flex flex-col items-center">
          <div>
            <div className="w-90 font-light text-neutral-100">
                Visualize your team's structure with ease , asigning roles and responsibilities for each project,a nd get a clear overview of who's working on what.
            </div>
            <button className={cn(
              "px-6 py-3 mt-2 rounded-full font-light text-neutral-100 border-x-1 border-purple-200 cursor-pointer",
              "bg-[radial-gradient(transparent_0%,var(--color-purple-200)_250%)]",
              "hover:bg-[radial-gradient(transparent_0%,var(--color-purple-200)_150%)]"
            )}>
                Discover More
            </button>
          </div>

        </div>
    </>
  )
}

export default HeroRight