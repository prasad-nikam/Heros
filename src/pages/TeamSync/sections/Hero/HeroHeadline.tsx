import { CircleDashed, Star, ArrowLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PercentageCircle } from "./Hero";

const HeroHeadline = () => {
  return (
    <>
      <div className="mt-6 flex gap-6 text-6xl font-semibold text-neutral-200">
        <div className="text-sm font-light">/2025</div>
        <div className="relative">
          {" "}
          EMPOWER
          <PercentageCircle
            arrow="up"
            percentage={7.3}
            className="absolute -top-2 -right-6 rotate-20"
          />
        </div>
        <div className="relative ml-4">
          <div
            className={cn(
              "absolute flex size-12 items-center justify-center rounded-full",
              "border-3 border-[#090617] bg-yellow-300/60 mask-t-from-35%",
            )}
          >
            <CircleDashed className="text-white" />
          </div>
          <div
            className={cn(
              "absolute left-8 flex size-12 items-center justify-center rounded-full",
              "border-3 border-[#090617] bg-red-600 mask-t-from-35%",
            )}
          >
            {" "}
            <Star className="text-white" />{" "}
          </div>
        </div>
      </div>
      <div className="mt-2 ml-15 flex w-full items-center text-6xl font-semibold text-neutral-200">
        <div
          className={cn(
            "mr-4 flex h-full w-40 items-center justify-end rounded-xl border border-neutral-800",
            "bg-[linear-gradient(165deg,transparent_0%,var(--color-purple-200)_450%)]",
          )}
        >
          <div
            className={cn(
              "m-0.5 flex size-14 items-center justify-center rounded-full",
              "bg-[radial-gradient(transparent_0%,var(--color-purple-200)_150%)]",
            )}
          >
            <div className="rounded-full bg-white p-1">
              <ArrowLeftRight className="text-[#090617]" />
            </div>
          </div>
        </div>
        <div className="relative">
          YOUR <span className="text-neutral-500">WORKFLOW</span>
          <PercentageCircle
            percentage={4.2}
            arrow="down"
            className="absolute -right-2 -bottom-0.5 -rotate-15"
          />
        </div>
      </div>
    </>
  );
};

export default HeroHeadline;
