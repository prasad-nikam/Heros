import { cn, K } from "@/lib/utils";

const Navbar = () => {
  return (
    <div
      className={cn(
        "mx-auto flex h-12 w-2xl items-center justify-between rounded-full bg-white px-8 py-4",
        "shadow-sm",
      )}
    >
      <div className="text-xl font-semibold">TrustLine</div>
      <div className="flex items-center justify-center gap-4 text-xs">
        <div className="cursor-pointer hover:text-neutral-500">Features</div>
        <div className="cursor-pointer hover:text-neutral-500">Pricing</div>
        <div className="cursor-pointer hover:text-neutral-500">About</div>
        <div className="cursor-pointer hover:text-neutral-500">FAQ</div>
      </div>
      <div className="flex gap-4 text-xs">
        <button className="cursor-pointer rounded-full border-4 border-neutral-200 px-4 py-1 text-center hover:bg-neutral-200">
          Sign In
        </button>
        <button
          className={cn(
            "relative z-0 cursor-pointer rounded-full bg-blue-500 px-4 py-1 text-center text-white hover:bg-blue-600",
            K(
              "after",
              "absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md content-['']",
            ),
          )}
        >
          Book a demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
