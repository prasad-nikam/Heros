import { cn } from "@/lib/utils"

const TransactionsList = () => {
    return (
        <div className={cn("w-100 h-40 rounded-3xl bg-neutral-900 text-xs", "flex flex-col gap-2 justify-center items-center px-4 ",)}>
            <div className={cn("border border-neutral-700 rounded-2xl", "w-full h-14 flex justify-between items-center px-2")}>
                <div className="flex flex-col">
                    <div >From Alex Mandra</div>
                    <div className="text-neutral-500">today, 16:36</div>
                </div>
                <div className="h-fit p-1 px-2 bg-white rounded-sm text-neutral-900 mr-18">+$50</div>
            </div>
            <div className={cn("border border-neutral-700 rounded-2xl", "w-full h-14 flex justify-between items-center px-2")}>
                <div className="flex flex-col">
                    <div >To Luna Santos</div>
                    <div className="text-neutral-500">today, 16:36</div>
                </div>
                <div className="h-fit p-1 px-2 border border-neutral-600 rounded-sm mr-18">- $27</div>
            </div>

        </div>
    )
}

export default TransactionsList