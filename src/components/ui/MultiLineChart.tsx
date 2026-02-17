import { motion } from "motion/react";

export type LineData = {
  label: string;
  color: string;
  points: number[];
};

export type MultiLineChartProps = {
  data: LineData[];
  width?: number;
  height?: number;
  padding?: number;
  smooth?: boolean;
};

export default function MultiLineChart({
  data,
  width = 330,
  height = 170,
  padding = 40,
  smooth = true,
}: MultiLineChartProps) {
  if (!data.length) return null;

  const allValues = data.flatMap((d) => d.points);
  const maxY = Math.max(...allValues);
  const minY = Math.min(...allValues);

  const scaleX = (i: number, len: number) =>
    padding + (i / (len - 1)) * (width - padding * 2);

  const scaleY = (v: number) =>
    height -
    padding -
    ((v - minY) / (maxY - minY || 1)) * (height - padding * 2);

  const createPath = (points: number[]) =>
    points
      .map((p, i) => {
        const x = scaleX(i, points.length);
        const y = scaleY(p);
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

  const createSmoothPath = (points: number[]) => {
    return points.reduce((path, point, i, arr) => {
      const x = scaleX(i, arr.length);
      const y = scaleY(point);

      if (i === 0) {
        return `M ${x} ${y}`;
      }

      const prevX = scaleX(i - 1, arr.length);
      const prevY = scaleY(arr[i - 1]);

      const controlX = (prevX + x) / 2;

      return path + ` C ${controlX} ${prevY}, ${controlX} ${y}, ${x} ${y}`;
    }, "");
  };

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-full w-full rounded-lg bg-transparent"
      >
        {/* X-axis */}
        <line
          x1={padding}
          y1={height - padding}
          x2={width - padding}
          y2={height - padding}
          stroke="#555"
        />

        {/* Lines */}
        {data.map((line) => (
          <motion.path
            key={line.label}
            d={smooth ? createSmoothPath(line.points) : createPath(line.points)}
            fill="none"
            stroke={line.color}
            strokeWidth={1}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        ))}
      </svg>
      <div className="flex justify-between text-xs pt-2">
        {data.map((line) => {
          return (
            <div className="flex flex-row items-center justify-between gap-2 px-2">
              <div
                className={`size-3 rounded-full`}
                style={{ backgroundColor: line.color }}
              ></div>
              <div> {line.label}: </div>
              <div>{line.points[line.points.length - 1]}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
