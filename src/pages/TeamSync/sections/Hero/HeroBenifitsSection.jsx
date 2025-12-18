import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils";

const HeroBenifitsSection = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="mt-20 text-lg">KEY BENIFITS:</div>
            <div className="flex flex-col flex-1 w-1/3 mt-2">
                <BenifitsCard />
                <BenifitsCard />
                <BenifitsCard />
                <div className={cn("h-36 w-full rounded-xl border border-neutral-500 px-2 flex justify-between items-center", "bg-[radial-gradient(transparent_0%,var(--color-purple-200)_400%)]")}></div>
            </div>

        </div>
    )
}

export default HeroBenifitsSection

const BenifitsCard = () => {
    return (<>
        <div className="h-15 w-full rounded-xl border border-neutral-500 px-2 flex justify-between items-center">
            <div className="text-sx">Centralized project management </div>
            <ArrowUpRight />
        </div>
    </>)
}