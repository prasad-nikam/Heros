const Hero = () => {
  return (
    <div className="relative z-10 mt-20">
      <div className="flex flex-col items-center justify-center text-white">
        <div className="tracking-tighter md:text-6xl">Explore the reality</div>
        <div className="tracking-tighter md:text-6xl">
          of Finacce management
        </div>
        <div className="text-md mt-4 text-neutral-300">
          Say goodbye to financial stress with Paymark. Our all-in-one platform
        </div>
        <div className="text-md text-neutral-300">
          And transform the way you handle your finances.
        </div>

        <div className="relative z-20 mt-6 inline-flex h-12 items-center rounded-full bg-neutral-100/10">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            className="h-full w-md rounded-l-full px-8 placeholder:text-neutral-100 focus:outline-none"
          />
          <button className="h-full cursor-pointer rounded-full bg-neutral-200 px-8 text-black hover:bg-neutral-400">
            Send code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
