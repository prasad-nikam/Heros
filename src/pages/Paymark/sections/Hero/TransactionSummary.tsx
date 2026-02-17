import PaymentCard from "./PaymentCard";

const TransactionSummary = () => {
  return (
    <div className="relative flex w-100 flex-col items-center justify-around gap-2 rounded-3xl border border-neutral-800 p-4 text-sm lg:h-60">
      <div className="w-full">
        <div className="pb-2 text-sm">Sent</div>
        <div className="flex h-16 items-center justify-between rounded-2xl bg-neutral-50/5 px-4 py-2">
          <div>
            <div className="text-sm">$9,561</div>
            <div className="text-xs text-neutral-500">Balance:$7,892,139</div>
          </div>
          <div>USD</div>
        </div>
      </div>
      <div className="w-full">
        <div className="pb-2 text-sm">Recieve</div>
        <div className="flex h-16 items-center justify-between rounded-2xl bg-neutral-50/5 px-4 py-2">
          <div>
            <div className="text-sm">$12,458</div>
            <div className="text-xs text-neutral-500">Balance:$7,892,139</div>
          </div>
          <div>USD</div>
        </div>
      </div>
      <div className="rounded-3xl bg-neutral-900 lg:absolute lg:-top-62 lg:-right-40">
        <PaymentCard />
      </div>
    </div>
  );
};

export default TransactionSummary;
