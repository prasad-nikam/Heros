import InvestmentCard from "./InvestmentCard";
import ProgessCard from "./ProgessCard";
import TransactionsList from "./TransactionsList";
import TransactionSummary from "./TransactionSummary";

const Hero = () => {
  return (
    <div className="relative z-10 h-full px-4 pt-8 selection:bg-white selection:text-black sm:pt-32">
      <div className="flex h-full flex-col items-center justify-between text-center text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
            Explore the reality
          </h1>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
            of Finance management
          </h1>
          <p className="max-w-xl pt-4 text-sm text-neutral-300 sm:text-base">
            Say goodbye to financial stress with Paymark. Our all-in-one
            platform
          </p>
          <p className="max-w-xl pb-6 text-sm text-neutral-300 sm:text-base">
            and transform the way you handle your finances.
          </p>

          <div className="relative z-20 flex w-full max-w-md flex-col items-center gap-2 overflow-hidden sm:flex-row sm:gap-0 sm:rounded-full sm:bg-neutral-100/10">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="h-12 w-full rounded-full bg-neutral-100/10 px-6 placeholder:text-neutral-300 focus:outline-none sm:bg-transparent"
            />
            <button className="h-12 w-40  rounded-full bg-neutral-200 px-6 text-black transition hover:bg-neutral-400">
              Send code
            </button>
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="lg:w-auto">
            <ProgessCard />
          </div>

          <div className="max-w-md">
            <InvestmentCard />
          </div>

          <div className="lg:w-auto">
            <TransactionSummary />
          </div>

          <div className="lg:w-auto">
            <TransactionsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
