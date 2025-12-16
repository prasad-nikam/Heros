import MultipleLogos from "./MultipleLogos";
import Window from "./Window";

function Hero() {
	return (
		<div className="flex-1 flex w-full overflow-hidden">
			<div className="h-full w-full flex flex-col justify-center gap-6 pl-50">
				<div className="text-sm flex justify-center items-center bg-neutral-200 text-neutral-600 pr-4 pl-2 py-1 pt-1.5 rounded-full w-max">
					<MultipleLogos /> Trusted by 500+ Agencies worldwide
				</div>
				<div className="text-6xl text-neutral-800 font-bold leading-tight">
					Transform How You <br />{" "}
					<span className="text-blue-600"> Run your agency</span>
				</div>
				<div className="text-neutral-600">
					streamlie invoicing, onboarding, client management, team{" "}
					<br />
					operations and commission tracking -- all in one platform.
				</div>
				<button className="bg-black text-white w-fit py-3 px-6 rounded-2xl ">
					Try free for 30 days
				</button>
			</div>
			<div className="h-full w-full flex bg-blue-50 overflow-hidden">
				<div
					className="h-full flex-1 mt-16 rounded-l-2xl 
            bg-[radial-gradient(circle_at_top_left,var(--color-violet-400)_0%,var(--color-violet-500)_5%,var(--color-blue-500)_20%,var(--color-blue-300)_40%,white_80%)]"
				>
					<div className="h-full w-full bg-neutral-100 mt-12 ml-10 rounded-xl overflow-hidden">
						<Window />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Hero;
