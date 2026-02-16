import { Check } from "lucide-react"

const PaymentCard = () => {
    return (
        <div className="border border-neutral-800 h-72 w-60 rounded-3xl flex flex-col items-center justify-center gap-4 px-4">
            <div className="size-12 bg-neutral-50/5 rounded-full flex justify-center items-center border border-neutral-50/10">
                <div className="size-8 bg-red-400 rounded-full flex justify-center items-center">
                    <Check className="text-sm" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="font-semibold text-lg">$12,812</div>
                <div className="text-xs text-neutral-500">Payment has been Successfull</div>
            </div>
            <div className="h-px w-full bg-neutral-500"></div>
            <div className="flex w-full flex-col items-center text-xs">
                <div className="flex w-full justify-between ">
                    <div>Payment code</div>
                    <div>Date</div>
                </div>
                <div className="flex w-full text-neutral-500 justify-between text-[0.6rem]">
                    <div>X23NSFJRONSFYRFFKP</div>
                    <div>6 Feb 2026</div>
                </div>
            </div>
            <div className="bg-neutral-50/5 w-full h-14 rounded-xl flex gap-2 items-center px-2 py-1 text-xs">
                <div className="pl-4">
                    <div className="relative size-5 rounded-full bg-neutral-50/50">
                        <div className="absolute right-3 size-5 rounded-full bg-neutral-50/50"></div>
                    </div>

                </div>
                <div>
                    <div className="text-[0.7rem]">EDWARD COLINS</div>
                    <div className="text-neutral-500 text-[0.6rem]">****2313</div>
                </div>

            </div>
        </div>
    )
}

export default PaymentCard