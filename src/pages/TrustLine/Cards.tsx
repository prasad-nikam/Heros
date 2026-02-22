import { cn } from "@/lib/utils";
import {
  ChevronsUp,
  ShieldCheck,
  ToggleLeft,
  ToggleRight,
  Users,
} from "lucide-react";
import TeamHub from "./TeamHub";
import CustomersCard from "./CustomersCard";

const Cards = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative z-9">
        <CustomersCard />
        <div className="absolute -top-20 right-22 -z-9 size-200 rounded-tr-4xl border-2 border-[#DEDEF7]"></div>
      </div>

      <div
        style={{
          background: "white",
          backgroundImage: `
        radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
        radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
        radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px",
          backgroundPosition: "0 0, 10px 10px, 30px 30px",
        }}
        className="border- relative flex h-40 w-70 border-y-3 border-dashed border-[#DEDEF7]"
      >
        <div className="h-full w-1/2 border-r-2 border-dashed border-[#DEDEF7]">
          <div className="h-1/2 w-full border-b-2 border-dashed border-[#DEDEF7]"></div>
        </div>
        <div className="h-full w-1/2 border-dashed border-[#DEDEF7]">
          <div className="h-1/2 w-full border-b-2 border-dashed border-[#DEDEF7]"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200 p-1">
          <div className="rounded-full border border-neutral-300 p-1">
            <div className="cursor-pointer rounded-full bg-blue-500 px-4 py-1 text-center text-xs text-white hover:bg-blue-600">
              TrustLine
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-box relative z-0 h-60 w-60 rounded-md">
        <div className="shadow-box absolute -top-12 left-1/2 flex w-1/2 -translate-x-1/2 items-center justify-center gap-1 rounded-md bg-white py-2 text-center text-xs">
          <span className="inline-block">
            <Users className="size-3 text-amber-400" />
          </span>
          Your CX Team
        </div>

        <TeamHub />
        <div className="absolute -top-20 left-30 -z-9 size-200 rounded-tl-4xl border-2 border-dashed border-[#DEDEF7]"></div>
      </div>

      <div className="absolute top-0 left-0 h-110 w-64 rounded-br-4xl border-2 border-dashed border-[#DEDEF7]">
        <div className="relative h-full w-full">
          <div className="shadow-box absolute top-1/2 right-0 flex w-48 translate-x-1/2 -translate-y-2/5 flex-col items-center justify-center rounded-md bg-white p-2">
            <div className="flex w-full justify-between border-b border-neutral-200 text-xs">
              <div className="flex items-center gap-0.5">
                <div className="text-xl text-neutral-600">8</div>
                <div className="flex flex-col items-center">
                  <ChevronsUp size={12} />
                  <div className="text-[10px]">%</div>
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] text-neutral-800">
                  Without TrustLines
                </div>
                <div className="h-1.5 w-full rounded-2xl bg-linear-to-r from-neutral-200 to-transparent"></div>
              </div>
              <div>
                <ToggleLeft className="text-neutral-500" />
              </div>
            </div>

            <div className="mt-1.5 flex w-full justify-between">
              <div className="flex items-center gap-0.5 text-blue-700">
                <div className="text-xl font-bold">75</div>
                <div className="flex flex-col items-center">
                  <ChevronsUp size={12} />
                  <div className="text-[10px]">%</div>
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] text-neutral-800">
                  With TrustLines
                </div>
                <div className="h-1.5 w-full rounded-2xl bg-linear-to-r from-neutral-200 to-transparent"></div>
              </div>
              <div>
                <ToggleRight className="text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-110 w-68 rounded-bl-4xl border-2 border-[#DEDEF7]">
        <div className="relative h-full w-full">
          <div className="shadow-box absolute top-1/2 flex size-36 -translate-x-1/2 -translate-y-2/5 flex-col rounded-md bg-white">
            <div className="py-1 text-center text-[0.7rem]">
              Secure Proxy Protection
            </div>
            <div
              className={cn(
                "flex flex-1 items-center justify-center",
                "bg-[radial-gradient(circle_at_center,var(--color-green-300)_13%,transparent_13%)] bg-size-[10px_10px]",
              )}
            >
              <div
                className={cn(
                  "flex h-full w-full items-center justify-center",
                  "bg-[radial-gradient(circle_at_center,var(--color-green-200)_0%,transparent_80%)]",
                )}
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-[#029F6A]">
                  <ShieldCheck fill="white" className="text-[#029F6A]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
