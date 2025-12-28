import { cn } from "@/lib/utils";
import { MoveUpRight, MoveDownRight } from "lucide-react";
import React from "react";

type PercentageCircleProps = {
  percentage: number;
  arrow: string;
  className?: string;
};

const PercentageCircle: React.FC<PercentageCircleProps> = ({
  percentage,
  arrow,
  className,
}: PercentageCircleProps) => {
  const color =
    arrow === "up"
      ? "bg-green-500/15 text-green-200"
      : "bg-red-500/15 text-red-200";

  return (
    <div
      className={cn(
        "flex h-fit items-center justify-center rounded-full p-1.5 px-2",
        "backdrop-blur-[2px]",
        color,
        className,
      )}
    >
      {arrow === "up" ? (
        <MoveUpRight className="size-3" />
      ) : (
        <MoveDownRight className="size-3" />
      )}
      <span className="ml-1 text-xs">{percentage}%</span>
    </div>
  );
};

export default PercentageCircle;
