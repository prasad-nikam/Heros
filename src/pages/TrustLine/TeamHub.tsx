import { CircleUser } from "lucide-react";
import { motion } from "motion/react";

type Node = {
  id: string;
  label: string;
  img?: string;
  x: number; // percent (0-100)
  y: number; // percent (0-100)
};

const defaultNodes: Node[] = [
  { id: "team1", label: "Team 1", x: 22, y: 20 },
  { id: "team3", label: "Team 3", x: 78, y: 20 },
  { id: "ai", label: "AI", x: 12, y: 62 },
  { id: "brain", label: "Brain", x: 88, y: 62 },
  { id: "team2", label: "Team 2", x: 50, y: 80 },
];

export default function TeamHub({ nodes = defaultNodes }: { nodes?: Node[] }) {
  const viewBox = "0 0 100 100"; // used for svg lines in percent-coordinates

  return (
    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white p-6 py-2">
      <div className="relative size-full rounded-md">
        {/* SVG dashed connector lines (center to each node) */}
        <svg
          viewBox={viewBox}
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {nodes.map((n) => (
            <line
              key={n.id}
              x1={50}
              y1={45}
              x2={n.x}
              y2={n.y}
              stroke="#c7d2fe"
              strokeWidth={0.6}
              strokeDasharray="2 2"
              opacity={0.9}
            />
          ))}
        </svg>

        {/* central box */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: -10 }}
          transition={{ duration: 0.45 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex size-10 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(99,102,241,0.12)]">
            <CircleUser className="size-7 text-amber-400" />
          </div>
        </motion.div>

        {/* nodes placed absolutely using percent coords */}
        {nodes.map((n) => (
          <div
            key={n.id}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
              {/* avatar or icon */}
              {n.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={n.img}
                  alt={n.label}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-sm font-medium text-gray-700">
                  {n.label
                    .split(" ")
                    .slice(0, 2)
                    .map((s) => s[0])
                    .join("")}
                </div>
              )}
            </div>
            <div className="mt-1 text-[0.7rem] text-gray-500 select-none">
              {n.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
