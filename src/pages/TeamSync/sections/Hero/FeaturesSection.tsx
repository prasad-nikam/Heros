import { cn } from "@/lib/utils";
import { Box, EllipsisVertical, Plus } from "lucide-react";
import { div } from "motion/react-client";
import React from "react";

const FeaturesSection = () => {
  return (
    <div
      className={cn(
        "relative mt-2 mr-10 flex h-full w-2/3 flex-col overflow-hidden rounded-xl border border-neutral-500 p-4",
        "bg-purple-500/5",
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-white">
            Integrate your apps to your workspace
          </div>
          <div className="text-xs">
            Connect integrations with other services to be faster
          </div>
        </div>
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-full",
            "border border-neutral-500",
            "bg-[radial-gradient(circle_at_bottom_left,var(--color-purple-400)_0%,var(--color-blue-700)_40%,var(--color-black)_80%,transparent_100%)]",
          )}
        >
          <Box />
        </div>
      </div>
      <div className="flex justify-around h-full w-full my-4">
          <Card/>
          <Card/>
          <Card 
            title="Your App" 
            Description="Coonect your any app" 
            className={cn(
                "bg-green-500/8",
                "bg-[linear-gradient(115deg,rgb(var(--color-green-400)_/_0.5)_0%,transparent_50%)]"
            )} 
            logo={<Plus/>}
        />
      </div>

      <div
        className={cn(
          "absolute -top-10 -left-200 h-70 w-500 -rotate-40 rounded-full",
          "backdrop-blur-10xl bg-[radial-gradient(var(--color-purple-400)_0%,transparent_60%)] opacity-40",
        )}
      ></div>
    </div>
  );
};

export default FeaturesSection;

type CardProps = {
    className?: String;
    logo?:any;
    title:String;
    Description:String;
}

const Card:React.FC<CardProps> = ({className,logo, title, Description}:CardProps)=>{
    
    return(
        <div className={cn(
            "h-full w-50 bg-neutral-50/8 rounded-2xl flex flex-col",
            "shadow-[inset_0_0_40px_rgba(256,256,256,0.2)]",
            className
            )}>
                <div className="flex justify-between m-6">
                    <div className="size-10 rounded-full bg-neutral-100/20 flex justify-center items-center">{logo}</div>
                    <EllipsisVertical/>
                </div>
                <div className=" flex flex-col gap-2 w-3/4 m-8 justify-self-center">
                    <div className="font-light text-xl text-wrap">{title}</div>
                    <div className="font-light wrap-break-word w-">{Description}</div>
                </div>
        </div>
    )
}
