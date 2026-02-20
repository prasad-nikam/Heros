import { cn } from "@/lib/utils";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { ArrowLeftRight, CircleDollarSign, MousePointer2 } from "lucide-react";

const Ezcard = () => {
  return (
    <div className="relative flex min-h-screen w-full bg-neutral-50 p-2 text-neutral-900">
      <div className="mx-auto h-full w-7xl">
        <Navbar />
        <Hero />
      </div>
      <div className="absolute inset-0 top-98 flex justify-center overflow-hidden md:mask-t-from-88% md:mask-t-to-98%">
        <div
          className={cn(
            "relative size-450 rounded-full",
            "flex items-center justify-center",
          )}
        >
          <div
            className={cn(
              "size-450 rounded-full border border-neutral-300",
              "flex items-center justify-center",
            )}
          >
            <div
              className={cn(
                "size-400 rounded-full border border-neutral-300",
                "flex items-center justify-center",
              )}
            >
              <div
                className={cn(
                  "size-350 rounded-full border border-neutral-300",
                  "flex items-center justify-center",
                )}
              ></div>
            </div>
          </div>

          <div
            className={cn(
              "flex items-center justify-center rounded-full bg-[#FAF1ED]",
              "absolute top-10 left-183 size-11 -translate-x-1/2",
              "md:left-140 md:size-14",
            )}
          >
            <ArrowLeftRight className="size-4 text-[#EE927F]" />
            <MousePointer2
              fill="#EE927F"
              className={cn(
                "absolute hidden size-4 text-lg text-[#EE927F] md:flex",
                "-bottom-3 -left-2 size-7 rotate-90",
              )}
            />
            <div
              className={cn(
                "absolute rounded-full bg-[#EE927F] px-4 py-1 text-xs text-nowrap text-white",
                "-bottom-6 -left-8",
                "md:-bottom-7 md:-left-32 md:text-sm",
              )}
            >
              Instant Transfer
            </div>
          </div>

          <div
            className={cn(
              "flex items-center justify-center rounded-full bg-[#EFEFFF]",
              "absolute top-32 right-173 size-11 -translate-x-1/2",
              "md:top-10 md:right-124 md:size-14",
            )}
          >
            <CircleDollarSign className="size-7 text-blue-700" />
            <MousePointer2
              fill="#3D3FF0"
              className={cn(
                "absolute hidden size-4 text-lg text-blue-700 md:flex",
                "-right-2 -bottom-3 size-7",
              )}
            />
            <div
              className={cn(
                "absolute rounded-full bg-blue-700 py-1 text-xs text-nowrap text-white",
                "-right-6 -bottom-6 pr-4 pl-10",
                "md:-right-23 md:-bottom-7 md:px-4 md:text-sm",
              )}
            >
              Zero Fees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ezcard;
