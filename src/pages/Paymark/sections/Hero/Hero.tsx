import InvestmentCard from "./InvestmentCard";
import TransactionSummary from "./TransactionSummary";

const Hero = () => {
  return (
    <div className="relative z-10 pt-15 selection:bg-white selection:text-black">
      <div className="flex flex-col items-center justify-center text-white">
        <div className="tracking-tighter md:text-6xl">Explore the reality</div>
        <div className="tracking-tighter md:text-6xl">
          of Finacce management
        </div>
        <div className="text-md pt-4 text-neutral-300">
          Say goodbye to financial stress with Paymark. Our all-in-one platform
        </div>
        <div className="text-md text-neutral-300 pb-4">
          And transform the way you handle your finances.
        </div>

        <div className="relative z-20 inline-flex h-12 items-center rounded-full bg-neutral-100/10">
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
        <div className="h-100 w-full flex justify-between items-end gap-2">
          <div className="w-100 h-36 rounded-3xl"></div>
          <div className="relative w-120 h-70 rounded-3xl"> <InvestmentCard /> </div>
          <div className=""><TransactionSummary /></div>
          <div className="w-100 h-36 rounded-3xl"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
