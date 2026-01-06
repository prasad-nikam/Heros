import MultiLineChart from "@/components/ui/MultiLineChart";

const InvestmentCard = () => {
  const data = [
    { label: "Sales", color: "#22c55e", points: [10, 30, 25, 40, 35] },
    { label: "Revenue", color: "#3b82f6", points: [20, 25, 30, 28, 45] },
    { label: "Users", color: "#a855f7", points: [5, 15, 20, 22, 30] },
  ];
  return (
    <div className="h-full w-full rounded-3xl bg-neutral-800 p-6"> 

        
        <MultiLineChart data={data} height={150} smooth={true} width={400} padding={0}/>
    </div>
  );
};

export default InvestmentCard;