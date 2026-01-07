import MultiLineChart from "@/components/ui/MultiLineChart";

const InvestmentCard = () => {
  const data = [
    { label: "Sales", color: "#22c55e", points: [10, 30, 25, 40, 35] },
    { label: "Revenue", color: "#3b82f6", points: [20, 25, 30, 28, 45] },
    { label: "Users", color: "#a855f7", points: [5, 15, 20, 22, 30] },
  ];
  return (
    <div className="flex flex-col h-full w-full rounded-3xl bg-neutral-900 p-6"> 
        <div className="text-4xl">$521K</div>
        <div className="text-xs text-neutral-400 ">Your Investment is Growing</div>
        
        <MultiLineChart data={data} height={150} smooth={true} width={400} padding={0}/>
        <div className="text-xs"> 
          <div>
            <div>klu</div>
            <div> education</div>
          </div>
        </div>
    </div>
  );
};

export default InvestmentCard;