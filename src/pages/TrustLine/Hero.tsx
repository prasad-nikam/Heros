import { cn, K } from "@/lib/utils";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center pt-10 text-5xl leading-14 font-semibold tracking-wide">
        <div>Trusted 3rd Party</div>
        <div>Canellation Solution</div>
      </div>
      <div className="mx-auto flex w-4xl justify-center pt-4 text-center font-light text-neutral-500">
        TrustLine auomates third-party support, requests speeding up <br />{" "}
        responses while keeping your processes secure.
      </div>
      <div className="flex justify-center gap-8 pt-6 text-sm">
        <button
          className={cn(
            "relative cursor-pointer rounded-full bg-blue-600 p-4 py-3 text-white",
            K("after", "absolute inset-0 bg-black"),
          )}
        >
          Get Started
        </button>
        <button
          className={cn(
            "cursor-pointer rounded-full bg-white p-4 py-3 hover:bg-neutral-200",
            "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          )}
        >
          View Live demo
        </button>
      </div>
    </div>
  );
};

export default Hero;
