import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroIntro = () => {
  return (
    <div className="flex items-center gap-6">
      <div
        className={cn(
          "full flex size-10 items-center justify-center rounded-full border border-neutral-500",
          "bg-[radial-gradient(transparent_0%,var(--color-purple-200)_400%)]",
        )}
      >
        {" "}
        <Eye />{" "}
      </div>
      <div className="text-sm text-neutral-500">
        {"[ "} <span className="ml-4"></span> Take controll of your work life
        like never before <br />
        Our Intuative Dashboard brings together all your projects{" "}
        <span className="mr-4"></span> {"]"}
      </div>
    </div>
  );
};

export default HeroIntro;
