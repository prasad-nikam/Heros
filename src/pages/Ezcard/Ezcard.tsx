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
      <div className="absolute inset-0 top-98 flex justify-center overflow-hidden mask-t-from-88% mask-t-to-98%">
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
              "absolute top-10 left-140 size-14 -translate-x-1/2",
            )}
          >
            <ArrowLeftRight className="size-6 text-[#EE927F]" />
            <MousePointer2
              fill="#EE927F"
              className="absolute -bottom-2 -left-2 size-7 rotate-90 text-lg text-[#EE927F]"
            />
            <div className="absolute -bottom-6 -left-32 rounded-full bg-[#EE927F] px-4 py-1 text-sm text-nowrap text-white">
              Instant Transfer
            </div>
          </div>
          <div
            className={cn(
              "flex items-center justify-center rounded-full bg-[#EFEFFF]",
              "absolute top-10 right-124 size-14 -translate-x-1/2",
            )}
          >
            <CircleDollarSign className="size-7 text-blue-700" />
            <MousePointer2
              fill="#3D3FF0"
              className="absolute -right-2 -bottom-2 size-7 text-lg text-[#3D3FF0]"
            />
            <div className="absolute -right-23 -bottom-6 rounded-full bg-blue-700 px-4 py-1 text-sm text-nowrap text-white">
              Zero Fees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ezcard;
