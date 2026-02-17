import MultiLineChart from "@/components/ui/MultiLineChart";
import BalanceCard from "./BalanceCard";

const InvestmentCard = () => {
  const InvestmentData = [
    { label: "Sales", color: "#22c55e", points: [10, 30, 25, 40, 35] },
    { label: "Revenue", color: "#3b82f6", points: [20, 25, 30, 28, 45] },
    { label: "Users", color: "#a855f7", points: [5, 15, 20, 22, 30] },
  ];

  const BalanceData = [
    { key: "sun", value: 3 },
    { key: "mon", value: 5 },
    { key: "tue", value: 2, color: "var(--color-red-500)" },
    { key: "wed", value: 4 },
    { key: "thu", value: 3 },
    { key: "fri", value: 7, color: "var(--color-green-500)" },
    { key: "sat", value: 3 },
  ];

  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-between gap-2 rounded-3xl border border-neutral-800 bg-transparent p-6 lg:h-full">
      <BalanceCard arr={BalanceData} />
      <div className="text-4xl">$521K</div>
      <div className="text-xs text-neutral-400">Your Investment is Growing</div>
      <MultiLineChart
        data={InvestmentData}
        height={120}
        smooth={true}
        width={400}
        padding={0}
      />
    </div>
  );
};

export default InvestmentCard;
