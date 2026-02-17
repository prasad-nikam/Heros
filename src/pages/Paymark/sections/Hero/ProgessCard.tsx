import MultiBarChart from "./MultiBarChart"

const ProgessCard = () => {
    return (
        <div className="w-100 h-40 rounded-3xl bg-neutral-900 flex flex-col p-6 pb-4 justify-between">
            <div className="flex justify-between">
                <div className="text-lg font-semibold">Progess</div>
                <div className="p-0.5 px-1.5 flex justify-center items-center  rounded-full bg-orange-400 text-xs text-center">+12.8%</div>
            </div>
            <div className=" flex justify-between items-end">
                <div>
                    <div className="text-xs text-neutral-500 pb-1">Total Spend</div>
                    <div className="text-3xl font-semibold">$78.18k</div>
                </div>
                <div className="h-20">
                    <MultiBarChart />
                </div>
            </div>
        </div>
    )
}

export default ProgessCard