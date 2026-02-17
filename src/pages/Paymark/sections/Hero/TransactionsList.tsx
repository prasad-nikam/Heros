import { cn } from "@/lib/utils";

const TransactionsList = () => {
  return (
    <div
      className={cn(
        "h-40 w-100 rounded-3xl bg-neutral-900 text-xs",
        "flex flex-col items-center justify-center gap-2 px-4",
      )}
    >
      <div
        className={cn(
          "rounded-2xl border border-neutral-700",
          "flex h-14 w-full items-center justify-between px-2",
        )}
      >
        <div className="flex flex-col">
          <div>From Alex Mandra</div>
          <div className="text-neutral-500">today, 16:36</div>
        </div>
        <div className="mr-18 h-fit rounded-sm bg-white p-1 px-2 text-neutral-900">
          +$50
        </div>
      </div>
      <div
        className={cn(
          "rounded-2xl border border-neutral-700",
          "flex h-14 w-full items-center justify-between px-2",
        )}
      >
        <div className="flex flex-col">
          <div>To Luna Santos</div>
          <div className="text-neutral-500">today, 16:36</div>
        </div>
        <div className="mr-18 h-fit rounded-sm border border-neutral-600 p-1 px-2">
          - $27
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
