import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, BadgeCheck } from "lucide-react";
import girlSvg from "./girl-svgrepo-com.svg";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-center pt-6 text-4xl font-medium tracking-wide text-black md:text-6xl md:leading-18">
        <div>
          Eazy. <span>Rewarding.</span>
        </div>
        <div>Build for you.</div>
      </div>
      <div className="h-fit pt-4 text-center font-light tracking-wide text-neutral-600 md:w-120 md:text-lg">
        Seamless transactions, exclusive rewards and smart financial toolsto
        simplify your everyday life. Spend smarter, save better and enjoy more.
      </div>
      <div className="flex justify-center gap-4 p-6 md:text-xl">
        <button className="cursor-pointer rounded-full bg-blue-700 px-6 py-2 text-white hover:bg-blue-600">
          Get Started
        </button>
        <button className="cursor-pointer rounded-full border border-neutral-300 px-6 py-2 hover:bg-neutral-200">
          Learn More
        </button>
      </div>

      {/* to add floating elememnts */}
      <div className="relative z-9 flex flex-col items-center justify-center gap-4 pt-6 lg:flex-row lg:items-end">
        <div className="order-2 flex w-75 flex-col justify-between gap-4 lg:order-1">
          <div className="w-full rounded-2xl bg-white p-4 py-2 shadow-md/5">
            <div className="flex items-center justify-between pb-2">
              <div className="text-sm">Creadit Limit</div>
              <div className="text-lg font-semibold text-green-600">
                $53,224
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="h-5 w-full rounded-sm bg-neutral-200">
                <div className="to h-full w-[48%] rounded-sm bg-linear-to-r from-[#EC9482] to-[#996CB9]"></div>
              </div>
              <div className="text-xs">48%</div>
            </div>
          </div>
          <div className="flex h-22 w-full gap-4">
            <div className="flex h-full w-1/2 flex-col items-center justify-center gap-2 rounded-2xl bg-[#574DE0] text-white shadow-md/10">
              <div>
                <BadgeCheck className="size-8" />
              </div>
              <div className="text-sm">Transfer Success!</div>
            </div>
            <div className="flex h-full w-1/2 items-center justify-center rounded-2xl bg-white shadow-md/10">
              <div className="size-16 rounded-full bg-blue-50">
                <img src={girlSvg} alt="A girl illustration" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "relative order-1 h-90 w-58 overflow-hidden rounded-3xl lg:order-2",
            "bg-linear-to-tr from-[#EC9482] from-10% via-purple-600 via-70% to-[#3C3FF3]"
          )}
        >
          <div className="flex h-full w-full flex-col justify-between rounded-3xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">Basic</div>
              <div className="h-8 w-12">
                <SimChip />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-lg">John D.</div>
                02/30
              </div>
              <div className="text-xl font-semibold">EZ</div>
            </div>
          </div>

          <div className="absolute top-[64%] left-1/2 size-100 -translate-x-1/2 rounded-t-full border border-neutral-50/10 bg-white/5"></div>
          <div className="absolute top-[30%] left-[64%] size-100 rounded-full border border-neutral-50/10 bg-white/5"></div>
        </div>
        <div className="order-3 flex w-75 flex-col rounded-2xl bg-white p-4 shadow-md/10">
          <div className="text-sm text-neutral-500">Balance</div>
          <div className="pb-4 text-4xl font-semibold"> $45,324</div>
          <div className="flex h-18 w-full gap-2">
            <div className="flex h-full w-1/2 flex-col justify-between rounded-md bg-purple-100 p-2">
              <div>
                <div className="flex items-center gap-1 text-xs">
                  {" "}
                  <ArrowDown className="rounded-full bg-white p-1 text-sm text-purple-700" />{" "}
                  Income
                </div>
              </div>
              <div className="pl-1 font-semibold">$48,000</div>
            </div>

            <div className="flex h-full w-1/2 flex-col justify-between rounded-md bg-orange-100 p-2">
              <div>
                <div className="flex items-center gap-1 text-xs">
                  {" "}
                  <ArrowUp className="rounded-full bg-white p-1 text-sm text-orange-700" />{" "}
                  Income
                </div>
              </div>
              <div className="pl-1 font-semibold">$48,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const SimChip = () => {
  return (
    <div className="grid size-full grid-cols-3 rounded-lg border-2 border-[#ffbb00] bg-[#fcd469]">
      <div className="grid grid-rows-4">
        <div></div>
        <div className="rounded-tr-md border-t border-r border-neutral-500"></div>
        <div className="border-t border-r border-neutral-500"></div>
        <div className="border-t border-r border-neutral-500"></div>
      </div>
      <div></div>
      <div className="grid grid-rows-4 border-l border-neutral-500">
        <div className="border-b border-neutral-500"></div>
        <div className="border-b border-neutral-500"></div>
        <div className="border-b border-neutral-500"></div>
        <div className=""></div>
      </div>
    </div>
  );
};
