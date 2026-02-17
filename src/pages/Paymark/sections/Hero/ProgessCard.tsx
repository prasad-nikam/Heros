import MultiBarChart from "./MultiBarChart";

const ProgessCard = () => {
  return (
    <div className="flex h-40 w-100 flex-col justify-between rounded-3xl bg-neutral-900 p-6 pb-4">
      <div className="flex justify-between">
        <div className="text-lg font-semibold">Progess</div>
        <div className="flex items-center justify-center rounded-full bg-orange-400 p-0.5 px-1.5 text-center text-xs">
          +12.8%
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="pb-1 text-xs text-neutral-500">Total Spend</div>
          <div className="text-3xl font-semibold">$78.18k</div>
        </div>
        <div className="h-20">
          <MultiBarChart />
        </div>
      </div>
    </div>
  );
};

export default ProgessCard;
