import {
  ArrowLeftRight,
  CircleDashed,
  Eye,
  MoveDownRight,
  MoveUpRight,
  Star,
} from "lucide-react";
import { cn } from "../../lib/utils";
import type React from "react";

const Hero: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="mx-20 flex mt-20 w-full items-center justify-center">
        <div className="flex w- flex-col">
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
          <div className=" mt-6 flex gap-6 text-6xl font-semibold text-neutral-200">
            <div className="text-sm font-light">/2025</div>
            <div className="relative"> EMPOWER
              <PercentageCircle
              arrow="up"
              percentage={7.3}
              className="absolute -right-6 -top-2 rotate-20"
            />
            </div>
            <div className="relative ml-4">
              <div
                className={cn(
                  "absolute flex size-12 items-center justify-center rounded-full",
                  "border-3 border-[#090617] bg-yellow-300/60 mask-t-from-35%",
                )}
              >
                <CircleDashed className="text-white"/>                
              </div>
              <div className={cn(
                "absolute left-8 flex size-12 items-center justify-center rounded-full",
                "border-3 border-[#090617] bg-red-500 mask-t-from-35%"
              )}>
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
            <PercentageCircle percentage={4.2} arrow="down" className="absolute -right-2 -bottom-0.5 -rotate-15"/>
            </div>
          </div>
        </div>
        
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

  const color = arrow ==="up"? "bg-green-500/15 text-green-200":"bg-red-500/15 text-red-200";

  return (
    <div
      className={cn(
        "flex h-fit  items-center justify-center rounded-full p-1.5 px-2",
        "backdrop-blur-[2px]",color,
        className,
      )}
    >
      {arrow === "up" ? (
        <MoveUpRight className="size-3" />
      ) : (
        <MoveDownRight className="size-3" />
      )}
      <span className="ml-1 text-xs">{percentage}%</span>
    </div>
  );
};
