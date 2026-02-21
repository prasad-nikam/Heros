import { cn } from "@/lib/utils";
import { ChevronsUp, ShieldCheck, ToggleLeft, ToggleRight } from "lucide-react";
import TeamHub from "./TeamHub";

const Cards = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative z-9">
        <div className="shadow-box z-9 rounded-md bg-white p-2">
          <div className="py-1 text-xs">Your Customers</div>
          <div className="grid grid-cols-3 gap-2 bg-white">
            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            ></div>
            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full rounded-sm border border-neutral-300 object-cover"
              />
            </div>

            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            ></div>
            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full rounded-sm border border-neutral-300 object-cover"
              />
            </div>
            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            ></div>
            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full rounded-sm border border-neutral-300 object-cover"
              />
            </div>
            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            ></div>
            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            >
              <img
                src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full rounded-sm border border-neutral-300 object-cover"
              />
            </div>
            <div
              className={cn(
                "shadow-box-small size-12 rounded-sm bg-white p-0.5",
              )}
            ></div>
          </div>
        </div>
        <div className="absolute -top-20 right-22 -z-9 size-200 rounded-tr-4xl border-2 border-[#DEDEF7]"></div>
      </div>
      <div className="border- h-40 w-70 border-y-3 border-dashed border-[#DEDEF7]">
        <div className="h-full w-1/2 border-r-2 border-dashed border-[#DEDEF7]"></div>
      </div>
      <div className="shadow-box relative z-0 h-60 w-60 rounded-md">
        <div className="z-0 h-full w-full rounded-md">
          <TeamHub />
        </div>
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
