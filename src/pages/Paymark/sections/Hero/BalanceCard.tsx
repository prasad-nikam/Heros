import { motion } from "motion/react";

type BalanceItem = { key: string; value: number; color?: string };

type BalanceCardProps = {
    arr: BalanceItem[];
}
const BalanceCard: React.FC<BalanceCardProps> = ({ arr }: BalanceCardProps) => {
    const heighest = Math.max(...arr.map(i => i.value));
    const height = arr.map(i => (i.value * 100) / heighest);
    console.log(`${height[5]}%`);
    return (
        <div className="absolute size-48 bg-neutral-800/80 border border-neutral-700 rounded-4xl -top-45 -left-22">
            <div className="relative flex flex-col justify-between h-full w-full p-4">
                <div className="text-xs pl-1 pt-1 text-neutral-500">Your Balance</div>
                <div className="text-2xl pl-1 pt-1 text-neutral-100 font-bold">$15,037</div>
                <div className="flex h-24 justify-between">
                    {arr.map((i, idx) => (
                        <div key={idx} className="h-full flex flex-col items-center justify-end gap-1">
                            <motion.div
                                initial={{ height: '0%' }}
                                animate={{ height: `${height[idx]}%` }}
                                whileHover={{ scale: 1.1, y: -4, transition: { duration: 0.1 } }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                style={{
                                    height: `${height[idx]}%`,
                                    backgroundColor: i.color ? i.color : 'var(--color-neutral-500)',
                                }}

                                className="text-xs w-4 text-neutral-400 rounded-t-sm bg-neutral-500/30"
                                key={idx}
                            ></motion.div>
                            <div className="text-[10px] text-neutral-100">{i.key}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BalanceCard