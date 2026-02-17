import { motion } from "motion/react";

type BalanceItem = { key: string; value: number; color?: string };

type BalanceCardProps = {
  arr: BalanceItem[];
};
const BalanceCard: React.FC<BalanceCardProps> = ({ arr }: BalanceCardProps) => {
  const heighest = Math.max(...arr.map((i) => i.value));
  const height = arr.map((i) => (i.value * 100) / heighest);
  return (
    <div className="relative size-48 rounded-4xl border border-neutral-700 bg-neutral-800/80 lg:absolute lg:-top-45 lg:-left-22">
      <div className="relative flex h-full w-full flex-col justify-between p-4">
        <div className="pt-1 pl-1 text-xs text-neutral-500">Your Balance</div>
        <div className="pt-1 pl-1 text-2xl font-bold text-neutral-100">
          $15,037
        </div>
        <div className="flex h-24 justify-between">
          {arr.map((i, idx) => (
            <div
              key={idx}
              className="flex h-full flex-col items-center justify-end gap-1"
            >
              <motion.div
                initial={{ height: "0%" }}
                animate={{ height: `${height[idx]}%` }}
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  transition: { duration: 0.1 },
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  height: `${height[idx]}%`,
                  backgroundColor: i.color
                    ? i.color
                    : "var(--color-neutral-500)",
                }}
                className="w-4 rounded-t-sm bg-neutral-500/30 text-xs text-neutral-400"
                key={idx}
              ></motion.div>
              <div className="text-[10px] text-neutral-100">{i.key}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
