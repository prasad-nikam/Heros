import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import StackedItems from "@/components/ui/StackedItems";
import FeaturesSection from "./FeaturesSection";
const HeroBenifitsSection = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="mt-20 text-lg">KEY BENIFITS:</div>
      <div className="flex w-full gap-4">
        <div className="mt-2 flex w-1/3 flex-1 flex-col">
          <BenifitsCard />
          <BenifitsCard />
          <BenifitsCard />
          <div
            className={cn(
              "flex h-48 w-full flex-col justify-between rounded-xl border border-neutral-500 p-4 font-light",
              "bg-[radial-gradient(transparent_0%,var(--color-purple-200)_400%)]",
            )}
          >
            <div className="text-sx text-wrap">
              {" "}
              Become the part of a thriving community where professional teams
              and agencies come together{" "}
            </div>
            <div className="flex h-10 w-full items-center justify-between">
              <StackedItems className="">
                <img
                  src="https://images.unsplash.com/photo-1764593154804-e7646a005ce0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-6 rounded-full border border-[#090617] object-cover"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1764601209414-e97da0c11b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                  alt=""
                  className="size-6 rounded-full border border-[#090617] object-cover"
                />
                <div className="flex h-full w-full items-center justify-center rounded-full bg-purple-500 text-xs text-white">
                  5M+
                </div>
              </StackedItems>
              <div className="text-sm font-medium">
                13K NEW USERS <br />
                EVERY MONTH
              </div>
            </div>
          </div>
        </div>
        <FeaturesSection />
      </div>
    </div>
  );
};

export default HeroBenifitsSection;

const BenifitsCard = () => {
  return (
    <>
      <div className="flex h-15 w-full items-center justify-between rounded-xl border border-neutral-500 px-2">
        <div className="text-sx font-light">
          Centralized project management{" "}
        </div>
        <ArrowUpRight />
      </div>
    </>
  );
};
