import React from "react";
import { cn } from "@/lib/utils";

type StackedItemsProps = {
  children: React.ReactNode;
  size?: number; // px
  overlap?: number; // px
  max?: number;
  className?: string;
};

export default function StackedItems({
  children,
  size = 24,
  overlap = 12,
  max,
  className,
}: StackedItemsProps) {
  const items = React.Children.toArray(children);
  const visibleItems = max ? items.slice(0, max) : items;
  const extraCount = max && items.length > max ? items.length - max : 0;

  return (
    <div className={cn("flex", className)}>
      {visibleItems.map((child, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
          style={{
            width: size,
            height: size,
            marginLeft: index === 0 ? 0 : -overlap,
          }}
        >
          {child}
        </div>
      ))}

      {extraCount > 0 && (
        <div
          className="flex items-center justify-center rounded-full bg-neutral-800 text-xs text-white"
          style={{
            width: size,
            height: size,
            marginLeft: -overlap,
          }}
        >
          +{extraCount}
        </div>
      )}
    </div>
  );
}
