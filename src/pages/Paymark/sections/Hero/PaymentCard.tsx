import { Check } from "lucide-react";

const PaymentCard = () => {
  return (
    <div className="flex h-72 w-60 flex-col items-center justify-center gap-4 rounded-3xl border border-neutral-800 px-4">
      <div className="flex size-12 items-center justify-center rounded-full border border-neutral-50/10 bg-neutral-50/5">
        <div className="flex size-8 items-center justify-center rounded-full bg-red-400">
          <Check className="text-sm" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-lg font-semibold">$12,812</div>
        <div className="text-xs text-neutral-500">
          Payment has been Successfull
        </div>
      </div>
      <div className="h-px w-full bg-neutral-500"></div>
      <div className="flex w-full flex-col items-center text-xs">
        <div className="flex w-full justify-between">
          <div>Payment code</div>
          <div>Date</div>
        </div>
        <div className="flex w-full justify-between text-[0.6rem] text-neutral-500">
          <div>X23NSFJRONSFYRFFKP</div>
          <div>6 Feb 2026</div>
        </div>
      </div>
      <div className="flex h-14 w-full items-center gap-2 rounded-xl bg-neutral-50/5 px-2 py-1 text-xs">
        <div className="pl-4">
          <div className="relative size-5 rounded-full bg-neutral-50/50">
            <div className="absolute right-3 size-5 rounded-full bg-neutral-50/50"></div>
          </div>
        </div>
        <div>
          <div className="text-[0.7rem]">EDWARD COLINS</div>
          <div className="text-[0.6rem] text-neutral-500">****2313</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
