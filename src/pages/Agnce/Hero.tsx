import MultipleLogos from "./MultipleLogos";
import Window from "./Window";

function Hero() {
  return (
    <div className="flex w-full flex-1 overflow-hidden">
      <div className="flex h-full w-full flex-col justify-center gap-6 pl-50">
        <div className="flex w-max items-center justify-center rounded-full bg-neutral-200 py-1 pt-1.5 pr-4 pl-2 text-sm text-neutral-600">
          <MultipleLogos /> Trusted by 500+ Agencies worldwide
        </div>
        <div className="text-6xl leading-tight font-bold text-neutral-800">
          Transform How You <br />{" "}
          <span className="text-blue-600"> Run your agency</span>
        </div>
        <div className="text-neutral-600">
          streamlie invoicing, onboarding, client management, team <br />
          operations and commission tracking -- all in one platform.
        </div>
        <button className="w-fit rounded-2xl bg-black px-6 py-3 text-white">
          Try free for 30 days
        </button>
      </div>
      <div className="flex h-full w-full overflow-hidden bg-blue-50">
        <div className="mt-16 h-full flex-1 rounded-l-2xl bg-[radial-gradient(circle_at_top_left,var(--color-violet-400)_0%,var(--color-violet-500)_5%,var(--color-blue-500)_20%,var(--color-blue-300)_40%,white_80%)]">
          <div className="mt-12 ml-10 h-full w-full overflow-hidden rounded-xl bg-neutral-100">
            <Window />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
