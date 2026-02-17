import InvestmentCard from "./InvestmentCard";
import ProgessCard from "./ProgessCard";
import TransactionsList from "./TransactionsList";
import TransactionSummary from "./TransactionSummary";

const Hero = () => {
  return (
    <div className="relative h-full z-10 sm:pt-16 pt-8 px-4 selection:bg-white selection:text-black">
      <div className="h-full flex flex-col items-center text-white text-center justify-between">

        <div className="flex flex-col items-center">
          <h1 className="tracking-tight text-3xl sm:text-4xl md:text-6xl font-semibold">
            Explore the reality
          </h1>
          <h1 className="tracking-tight text-3xl sm:text-4xl md:text-6xl font-semibold">
            of Finance management
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 pt-4 max-w-xl">
            Say goodbye to financial stress with Paymark. Our all-in-one platform
          </p>
          <p className="text-sm sm:text-base text-neutral-300 pb-6 max-w-xl">
            and transform the way you handle your finances.
          </p>

          <div className="relative z-20 flex w-full max-w-md flex-col gap-2 sm:gap-0 sm:flex-row items-center sm:rounded-full sm:bg-neutral-100/10 overflow-hidden">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full h-12 px-6 sm:bg-transparent placeholder:text-neutral-300 focus:outline-none rounded-full bg-neutral-100/10"
            />
            <button className="w-fit sm:w-auto h-12 px-6 bg-neutral-200 text-black hover:bg-neutral-400 transition rounded-full">
              Send code
            </button>
          </div>
        </div>
        <div className="mt-12 w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-6">

          <div className="lg:w-auto">
            <ProgessCard />
          </div>

          <div className=" max-w-md">
            <InvestmentCard />
          </div>

          <div className=" lg:w-auto">
            <TransactionSummary />
          </div>

          <div className=" lg:w-auto">
            <TransactionsList />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
