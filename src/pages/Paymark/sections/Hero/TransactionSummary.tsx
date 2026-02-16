const TransactionSummary = () => {
    return (
        <div className="w-100 h-60 p-4 rounded-3xl flex flex-col items-center justify-around border border-neutral-700 text-sm gap-2">
            <div className="w-full">
                <div className="text-sm pb-2">
                    Sent
                </div>
                <div className="flex h-16 justify-between items-center bg-neutral-50/5 px-4 py-2 rounded-2xl">
                    <div>
                        <div className="text-sm">$9,561</div>
                        <div className="text-xs text-neutral-500">
                            Balance:$7,892,139
                        </div>
                    </div>
                    <div>
                        USD
                    </div>
                </div>

            </div>
            <div className="w-full">
                <div className="text-sm pb-2">
                    Recieve
                </div>
                <div className="flex h-16 justify-between items-center bg-neutral-50/5 px-4 py-2 rounded-2xl">
                    <div>
                        <div className="text-sm">$12,458</div>
                        <div className="text-xs text-neutral-500">
                            Balance:$7,892,139
                        </div>
                    </div>
                    <div>
                        USD
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TransactionSummary