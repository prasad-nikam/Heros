import { cn } from "@/lib/utils";
import RightBottomWindow from "./RightBottomWindow";

const HeroRight = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-start pt-20">
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
        <div
          className={cn(
            "relative z-9 mt-25 h-94 w-full overflow-hidden rounded-2xl border border-neutral-700",
          )}
        >
          <div className="m-8 my-6 text-2xl text-white">
            Integrate your apps to your workspace
          </div>
          <RightBottomWindow />
          <div
            className={cn(
              "absolute inset-0 z-0 bg-[#39325b]",
              "bg-[linear-gradient(to_right,var(--color-neutral-500)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-500)_1px,transparent_1px)] bg-size-[90px_90px]",
              "pointer-events-none opacity-20",
            )}
          ></div>
        </div>
      </div>
    </>
  );
};

export default HeroRight;
