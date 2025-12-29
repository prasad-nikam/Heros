import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar";
import { cn } from "../../lib/utils";
function TeamSync() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#090617] text-neutral-100">
      <div
        className={cn(
          "absolute top-0 right-0 h-2/3 w-2/3",
          "bg-[linear-gradient(to_right,var(--color-neutral-500)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-500)_1px,transparent_1px)] bg-size-[100px_100px]",
          "to-transparent mask-t-from-50%",
          "to-transparent mask-b-from-30%",
          "to-transparent mask-l-from-60%",
          "pointer-events-none opacity-20",
        )}
      ></div>
      <div
        className={cn(
          "absolute top-20 -left-40 h-70 w-200 -rotate-20 rounded-full",
          "bg-blur-lg bg-[radial-gradient(var(--color-purple-400)_-10%,transparent_50%)] opacity-20",
        )}
      ></div>
      <div
        className={cn(
          "absolute top-0 -right-190 h-40 w-400 -rotate-70 rounded-full",
          "bg-[radial-gradient(var(--color-purple-200)_0%,transparent_60%)] opacity-14",
        )}
      ></div>
      <div
        className={cn(
          "absolute top-0 -right-60 h-40 w-200 -rotate-40 rounded-full",
          "bg-[radial-gradient(var(--color-purple-200)_0%,transparent_60%)] opacity-14",
        )}
      ></div>

      <Navbar />
      <Hero />
    </div>
  );
}

export default TeamSync;
