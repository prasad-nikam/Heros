import { ArrowLeftRight, Eye, MoveDownRight, MoveUpRight } from "lucide-react";
import { cn } from "../../lib/utils";
import type React from "react";

const Hero: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="mx-20 flex h-100 w-full items-center justify-center">
        <div className="flex w-2/3 flex-col">
          <div className="flex items-center gap-6">
            <div
              className={cn(
                "full flex size-10 items-center justify-center rounded-full border border-neutral-500",
                "bg-[radial-gradient(transparent_0%,var(--color-purple-200)_400%)]",
              )}
            >
              {" "}
              <Eye />{" "}
            </div>
            <div className="text-sm text-neutral-500">
              {"[ "} <span className="ml-4"></span> Take controll of your work
              life like never before <br />
              Our Intuative Dashboard brings together all your projects{" "}
              <span className="mr-4"></span> {"]"}
            </div>
          </div>
          <div className="relative mt-6 flex gap-6 text-6xl font-semibold text-neutral-200">
            <div className="text-sm font-light">/2025</div>
            <div>EMPOWER</div>
            <div className="size-12 rounded-full bg-red-800"></div>
            <PercentageCircle
              arrow="up"
              percentage={7.3}
              className="absolute -top-3 right-108"
            />
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
            YOUR WORKFLOW
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Hero;

type PercentageCircleProps = {
  percentage: number;
  arrow: string;
  className?: string;
};
const PercentageCircle: React.FC<PercentageCircleProps> = ({
  percentage,
  arrow,
  className,
}: PercentageCircleProps) => {
  return (
    <div
      className={cn(
        "flex h-fit rotate-20 items-center justify-center rounded-full p-1.5 px-2.5",
        "bg-green-500/15 text-green-200 backdrop-blur-[2px]",
        className,
      )}
    >
      {arrow === "up" ? (
        <MoveUpRight className="size-3" />
      ) : (
        <MoveDownRight className="size-4" />
      )}
      <span className="ml-1 text-xs">{percentage}%</span>
    </div>
  );
};
