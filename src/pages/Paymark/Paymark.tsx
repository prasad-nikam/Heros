import { cn } from "@/lib/utils";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Paymark = () => {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full pt-2",
        "z-0 overflow-hidden bg-neutral-800",
      )}
    >
      <Navbar />
      <Hero />

      <div
        className={cn(
          "pointer-events-none absolute top-0 left-1/2 -z-9 size-1000 -translate-x-1/2 opacity-40",
          "bg-[radial-gradient(circle_at_top,var(--color-red-800)_0%,transparent_10%)]",
        )}
      ></div>
      <div
        className={cn(
          "pointer-events-none absolute top-0 left-1/2 -z-10 size-1000 -translate-x-1/2 opacity-60",
          "bg-[radial-gradient(circle_at_top,var(--color-neutral-100)_5%,transparent_20%)]",
        )}
      ></div>
      <div
        className={cn(
          "pointer-events-none absolute -top-180 -left-78 -z-8 size-400",
          "bg-[radial-gradient(var(--color-neutral-100)_0%,transparent_15%)] opacity-30",
        )}
      ></div>
    </div>
  );
};

export default Paymark;
