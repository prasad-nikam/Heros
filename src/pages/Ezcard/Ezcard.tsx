import { cn } from "@/lib/utils";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Ezcard = () => {
  return (
    <div className="relative flex min-h-screen w-full bg-neutral-50 p-2 text-neutral-900">
      <div className="mx-auto h-full w-7xl">
        <Navbar />
        <Hero />
      </div>
      {/* <div className="absolute inset-0 top-105 flex justify-center mask-t-from-88% mask-t-to-95%">
        <div
          className={cn(
            "size-450 rounded-full border border-neutral-300",
            "flex items-center justify-center"
          )}
        >
          <div
            className={cn(
              "size-400 rounded-full border border-neutral-300",
              "flex items-center justify-center"
            )}
          >
            <div
              className={cn(
                "size-350 rounded-full border border-neutral-300",
                "flex items-center justify-center"
              )}
            ></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Ezcard;
