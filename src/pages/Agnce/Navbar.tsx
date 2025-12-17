import { motion } from "motion/react";

function Navbar() {
  return (
    <div className="flex h-16 w-full items-center justify-between px-10">
      <div className="text-xl font-extralight text-blue-600">AGNCE</div>
      <div className="flex items-center justify-center gap-6 font-semibold text-neutral-800">
        <motion.div className="cursor-pointer rounded-full border border-neutral-100 px-4 py-0.5 transition-all duration-100 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600">
          Home
        </motion.div>
        <motion.div className="cursor-pointer rounded-full border border-neutral-100 px-4 py-0.5 transition-all duration-100 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600">
          Features
        </motion.div>
        <motion.div className="cursor-pointer rounded-full border border-neutral-100 px-4 py-0.5 transition-all duration-100 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600">
          Pricing{" "}
        </motion.div>
        <motion.div className="cursor-pointer rounded-full border border-neutral-100 px-4 py-0.5 transition-all duration-100 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600">
          Contact
        </motion.div>
      </div>
      <div>
        <button className="rounded-lg bg-black px-4 py-2 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Navbar;
