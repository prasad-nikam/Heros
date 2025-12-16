import { motion } from "motion/react";

function Navbar() {
	return (
		<div className="h-16 w-full flex items-center justify-between px-10">
			<div className="text-xl font-extralight text-blue-600">AGNCE</div>
			<div className="flex justify-center gap-6 items-center  text-neutral-800 font-semibold">
				<motion.div className="hover:bg-blue-50 border hover:border-blue-600 border-neutral-100 hover:text-blue-600 px-4 py-0.5 rounded-full transition-all duration-100 cursor-pointer">
					Home
				</motion.div>
				<motion.div className="hover:bg-blue-50 border hover:border-blue-600 border-neutral-100 hover:text-blue-600 px-4 py-0.5 rounded-full transition-all duration-100 cursor-pointer">
					Features
				</motion.div>
				<motion.div className="hover:bg-blue-50 border hover:border-blue-600 border-neutral-100 hover:text-blue-600 px-4 py-0.5 rounded-full transition-all duration-100 cursor-pointer">
					Pricing{" "}
				</motion.div>
				<motion.div className="hover:bg-blue-50 border hover:border-blue-600 border-neutral-100 hover:text-blue-600 px-4 py-0.5 rounded-full transition-all duration-100 cursor-pointer">
					Contact
				</motion.div>
			</div>
			<div>
				<button className="bg-black text-white px-4 py-2 rounded-lg">
					Get Started
				</button>
			</div>
		</div>
	);
}

export default Navbar;
