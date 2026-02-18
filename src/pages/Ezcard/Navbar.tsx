import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex h-16 w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white">
      <div className="pl-6 text-2xl font-semibold">Ezcard</div>
      <div className="hidden items-center gap-6 md:flex">
        <div>Home</div>
        <div>About</div>
        <div>Products</div>
        <div>Help</div>
        <div>Customers</div>
      </div>
      <div className="hidden pr-6 md:flex">
        <button className="cursor-pointer rounded-full bg-blue-700 px-4 py-2 text-white hover:bg-blue-600">
          Try Now
        </button>
      </div>
      <button
        className="pr-4 md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          className="absolute top-full flex w-full flex-col gap-2 rounded-b-2xl bg-neutral-900/10 p-4 py-2 text-black"
        >
          <button className="rounded-xl bg-white py-2">Home</button>
          <button className="rounded-xl bg-white py-2">About</button>
          <button className="rounded-xl bg-white py-2">Products</button>
          <button className="rounded-xl bg-white py-2">Help</button>
          <button className="rounded-xl bg-white py-2">Customers</button>

          <button className="rounded-xl bg-blue-600 px-4 py-2">Try Now</button>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
