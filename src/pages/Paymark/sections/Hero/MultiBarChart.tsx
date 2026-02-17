import { motion } from "motion/react";

const data = [
    [40, 20, 10], [45, 25, 15], [30, 35, 20], [40, 20, 10], [45, 25, 15], [30, 35, 20],
]

const MultiBarChart = () => {

    let maxTotal = 0;

    data.map((i) => {

        let total = 0;
        for (const num of i) {
            total += num;
        }
        maxTotal = Math.max(maxTotal, total);
    })

    const height = data.map((i) =>
        i.map((i) => (i * 100) / maxTotal)
    )

    return (
        <div className="h-full w-full flex justify-center items-center gap-2">
            {
                height.map((i) => (
                    <div className="w-[0.4rem] h-full flex gap-0.5 justify-start flex-col-reverse items-center rounded-full pt-1">
                        {
                            i.map((j, idx) => (
                                <motion.div
                                    initial={{ height: '0%' }}
                                    animate={{ height: `${j}%` }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    style={{
                                        height: `${j}%`,
                                        backgroundColor: idx == 0 ? "var(--color-neutral-700)" : "var(--color-red-400)"
                                    }}
                                    className="text-xs w-full text-neutral-400 rounded-full bg-neutral-500/30"
                                    key={idx}
                                >
                                </motion.div>
                            )
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default MultiBarChart