import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const containerVarients = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
        duration: 0.3,
      },
    },
  };

  const itemVarients = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative flex h-16 w-full items-center justify-between rounded-2xl border border-neutral-200 bg-white">
      <div className="pl-6 text-2xl font-semibold">Ezcard</div>
      <div className="hidden cursor-pointer items-center gap-6 text-sm md:flex">
        <div>Home</div>
        <div>About</div>
        <div className="group flex items-center gap-2">
          Products <ChevronDown className="size-4 group-hover:rotate-180" />
        </div>
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
      <AnimatePresence>
        {open && (
          <motion.div
            layout
            variants={containerVarients}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="absolute top-full flex w-full flex-col gap-2 overflow-hidden rounded-b-2xl bg-neutral-200 p-4 py-2 text-black"
          >
            <motion.button
              variants={itemVarients}
              className="rounded-xl bg-white py-2"
            >
              Home
            </motion.button>
            <motion.button
              variants={itemVarients}
              className="rounded-xl bg-white py-2"
            >
              About
            </motion.button>
            <motion.button
              variants={itemVarients}
              className="rounded-xl bg-white py-2"
            >
              Products
            </motion.button>
            <motion.button
              variants={itemVarients}
              className="rounded-xl bg-white py-2"
            >
              Help
            </motion.button>
            <motion.button
              variants={itemVarients}
              className="rounded-xl bg-white py-2"
            >
              Customers
            </motion.button>

            <motion.button
              variants={itemVarients}
              className="rounded-xl bg-blue-600 px-4 py-2"
            >
              Try Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
