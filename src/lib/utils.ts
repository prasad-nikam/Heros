import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function K(prefix: string, inputs: string): string {
//   let clx = inputs.split(" ");
//   let classString = "";
//   clx.forEach((element) => {
//     classString = classString + " " + prefix + ":" + element;
//   });

//   return twMerge(classString);
// }

export function K(prefix: string, ...inputs: string[]): string {
  return inputs
    .join(" ")
    .trim()
    .split(" ")
    .map((cls) => `${prefix}:${cls}`)
    .join(" ");
}
