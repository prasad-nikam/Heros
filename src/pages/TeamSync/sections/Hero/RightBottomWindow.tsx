import PercentageCircle from "@/components/ui/PercentageCircle";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  CircleDollarSign,
  Dessert,
  Funnel,
  House,
  LayoutDashboard,
  Link,
  ListTodo,
  Moon,
  Mouse,
  Search,
  Sun,
  Users,
} from "lucide-react";

const RightBottomWindow = () => {
  return (
    <div className="relative z-11 ml-8 flex h-full w-full overflow-hidden rounded-2xl bg-[#090617]">
      <div
        className={cn(
          "m-4 h-full w-16 rounded-xl bg-purple-100/10 text-neutral-400",
          "flex flex-col items-center justify-start gap-4",
        )}
      >
        <div
          className={cn(
            "mt-4 flex size-10 items-center justify-center rounded-md text-2xl font-bold text-neutral-200",
            "bg-[radial-gradient(circle_at_bottom_left,var(--color-purple-200)_-50%,transparent_70%),radial-gradient(circle_at_top_right,var(--color-purple-200)_-50%,transparent_70%)]",
          )}
        >
          T
        </div>
        <div className="mx-4 h-px w-10 bg-neutral-100/50"></div>
        <House />
        <LayoutDashboard className="size-10 border-l p-2 text-neutral-200" />
        <Funnel />
        <CircleDollarSign />
        <Dessert />
        <Mouse />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="mt-4 flex h-12 w-full items-center justify-start gap-2">
          <div
            className={cn(
              "flex h-12 w-44 items-center justify-between rounded-full",
              "bg-[linear-gradient(0deg,var(--color-purple-200)_-900%,transparent_150%)]",
            )}
          >
            <div className="m-2 size-8 rounded-full bg-neutral-100/10">
              <img
                src="https://images.unsplash.com/photo-1764593154804-e7646a005ce0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="size-full rounded-full border border-[#090617] object-cover"
              />
            </div>
            <div className="mr-4 flex flex-col">
              <div className="text-xs text-neutral-400">Good Morning</div>
              <div className="text-sm">Willy Smith</div>
            </div>

            <ChevronDown className="mr-2" />
          </div>
          <div
            className={cn(
              "flex size-12 items-center justify-center rounded-full",
              "bg-[linear-gradient(0deg,var(--color-purple-200)_-900%,transparent_150%)]",
            )}
          >
            <Users />
          </div>
          <div
            className={cn(
              "flex h-12 w-24 items-center justify-between rounded-full",
              "bg-[linear-gradient(0deg,var(--color-purple-200)_-900%,transparent_150%)]",
            )}
          >
            <div className="ml-1 flex size-10 items-center justify-center rounded-full bg-neutral-100/10">
              <Moon className="size-6 text-neutral-200" />
            </div>
            <div className="mr-1 flex size-12 items-center justify-center rounded-full text-neutral-400">
              <Sun className="size-6" />
            </div>
          </div>
          <div
            className={cn(
              "ml-30 flex h-12 w-1/4 items-center justify-start gap-4 rounded-full px-4",
              "bg-[linear-gradient(0deg,var(--color-purple-200)_-900%,transparent_150%)]",
            )}
          >
            <Search className="size-6 text-neutral-400" />
            <div className="text-md text-neutral-400">Search</div>
          </div>
        </div>
        <div className="mt-4 flex h-12 w-full items-center gap-4">
          <div className="m-2 text-3xl text-neutral-300">Overview</div>
          <div className="z-999 flex cursor-pointer items-center gap-2 text-sm text-blue-400">
            <Link /> Share Link
          </div>
          <div
            className={cn(
              "flex h-full w-1/3 items-center justify-between rounded-full px-2 text-neutral-400",
              "bg-[linear-gradient(0deg,var(--color-purple-200)_-900%,transparent_150%)]",
              "border border-t-0 border-neutral-200/20",
            )}
          >
            <div className="flex h-8 items-center justify-center rounded-full bg-neutral-100/10 px-2">
              Books
            </div>
            <div className="flex h-10 items-center justify-center rounded-full px-4">
              Table
            </div>
            <div className="flex h-10 items-center justify-center rounded-full px-4">
              List
            </div>
          </div>
          <div
            className={cn(
              "flex h-full w-20 items-center rounded-l-full px-4",
              "bg-[linear-gradient(0deg,var(--color-purple-200)_-900%,transparent_150%)]",
            )}
          >
            <ListTodo className="text-neutral-400" />
          </div>
        </div>

        <div className="mt-4 flex h-28 w-full items-center gap-3">
          <div
            className={cn(
              "flex h-full w-50 flex-col justify-around rounded-md px-6 py-2 text-neutral-300",
              "bg-purple-400/10",
              "shadow-[inset_0_0_40px_rgba(256,256,256,0.2)]",
            )}
          >
            <div className="text-sm">Total customers</div>
            <div className="font-bold">137 customers</div>
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <PercentageCircle percentage={7.3} arrow="up" />
              than last month
            </div>
          </div>

          <div
            className={cn(
              "flex h-full w-50 flex-col justify-around rounded-md px-6 py-2",
              "bg-[linear-gradient(90deg,var(--color-neutral-100)_-900%,transparent_90%)]",
              "border border-neutral-200/20",
            )}
          >
            <div className="text-sm">Active Projects</div>
            <div className="font-bold">43 projecs</div>
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <PercentageCircle percentage={4.2} arrow="down" />
              than last month
            </div>
          </div>
          <div
            className={cn(
              "flex h-full w-50 flex-col justify-around rounded-md px-6 py-2",
              "bg-[linear-gradient(90deg,var(--color-neutral-100)_-900%,transparent_70%)]",
              "border border-neutral-200/20",
            )}
          >
            <div className="text-sm">Total Revenue</div>
            <div className="font-bold">$301,216.50</div>
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <PercentageCircle percentage={5.2} arrow="up" />
              than last month
            </div>
          </div>
        </div>
        <div className="mt-3 h-10 w-full rounded-md bg-neutral-100/10"></div>
      </div>
      <div
        className={cn(
          "absolute top-0 -left-50 h-50 w-200 -rotate-30 rounded-full",
          "bg-blur-lg bg-[radial-gradient(var(--color-purple-500)_0%,transparent_60%)] opacity-20",
        )}
      ></div>
    </div>
  );
};

export default RightBottomWindow;
