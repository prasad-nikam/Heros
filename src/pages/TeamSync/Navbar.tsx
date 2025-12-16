import { cn } from "../../lib/utils";

function Navbar() {
  return (
    <div
      className={cn("w-full px-8 py-6", "flex items-center justify-between")}
    >
      <div>
        <div className="text-lg font-semibold text-neutral-100">TeamSync</div>
      </div>
      <div className="flex gap-12">
        <button className="cursor-pointer hover:text-purple-400">Home</button>
        <button className="cursor-pointer hover:text-purple-400">
          About App
        </button>
        <button className="cursor-pointer hover:text-purple-400">
          Pricing
        </button>
        <button className="cursor-pointer hover:text-purple-400">
          Contact
        </button>
        <button className="cursor-pointer hover:text-purple-400">Blog</button>
      </div>
      <div className="flex justify-between gap-2">
        <button
          className={cn(
            "z-999 h-12 w-26 cursor-pointer rounded-full",
            "bg-[radial-gradient(transparent_0%,var(--color-purple-200)_400%)]",
            "hover:bg-[radial-gradient(transparent_0%,var(--color-purple-200)_200%)]",
          )}
        >
          Login
        </button>
        <button className="z-999 w-26 cursor-pointer rounded-full bg-green-500 px-4 py-2 text-[#090617] hover:bg-green-400">
          Register
        </button>
      </div>
    </div>
  );
}

export default Navbar;
