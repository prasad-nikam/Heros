import { cn } from "@/lib/utils";
import { Box, EllipsisVertical, Plus } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const FeaturesSection = () => {
  return (
    <div className="h-full w-2/3 pt-2">
      <div
        className={cn(
          "relative mr-10 flex h-full flex-col overflow-hidden rounded-xl border border-neutral-500 p-4",
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
        <div className="my-2 flex h-full w-full gap-2">
          <Card
            title="Google meet"
            Description="Conduct calls and meetings online"
            logo={
              <img
                className="size-6"
                src="https://www.gstatic.com/marketing-cms/assets/images/23/2e/f8262b124f86a3f1de3e14356cc3/google-meet.webp=s48-fcrop64=1,00000000ffffffff-rw"
              ></img>
            }
          />
          <Card
            title="Slack"
            Description="Communicate with the time"
            logo={<Slack />}
          />
          <Card
            title="Your App"
            Description="Coonect your any app"
            className={cn(
              "bg-green-500/8",
              "bg-[linear-gradient(125deg,rgb(var(--color-green-teamsynccard)/0.5)_0%,transparent_80%)]",
            )}
            logo={<Plus />}
          />
        </div>

        <div
          className={cn(
            "absolute top-10 -left-60 h-50 w-150 -rotate-45 rounded-full",
            "backdrop-blur-10xl bg-[radial-gradient(var(--color-purple-500)_0%,transparent_60%)] opacity-25",
          )}
        ></div>
      </div>
    </div>
  );
};

export default FeaturesSection;

type CardProps = {
  className?: String;
  logo?: any;
  title: String;
  Description: String;
};

const Card: React.FC<CardProps> = ({
  className,
  logo,
  title,
  Description,
}: CardProps) => {
  return (
    <div
      className={cn(
        "flex h-full w-50 flex-col rounded-2xl bg-neutral-50/8",
        "shadow-[inset_0_0_40px_rgba(256,256,256,0.2)]",
        className,
      )}
    >
      <div className="m-6 flex justify-between">
        <motion.div
          whileHover={{
            rotate: 360,
          }}
          className="z-999 flex size-10 items-center justify-center rounded-full bg-neutral-100/20"
        >
          {logo}
        </motion.div>
        <EllipsisVertical className="cursor-pointer" />
      </div>
      <div className="m-8 flex w-3/4 flex-col gap-2 justify-self-center">
        <div className="text-xl font-light text-wrap">{title}</div>
        <div className="w- font-light wrap-break-word">{Description}</div>
      </div>
    </div>
  );
};

const Slack = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 54 54"
      fill="none"
    >
      <g clip-path="url(#clip0_4127_70105)">
        <path
          d="M11.379 33.9993C11.379 37.1358 8.84512 39.6507 5.7276 39.6507C2.61008 39.6507 0.0572205 37.1168 0.0572205 33.9993C0.0572205 30.8817 2.5911 28.3479 5.70862 28.3479H11.36V33.9993H11.379Z"
          fill="#E01E5A"
        />
        <path
          d="M14.1962 33.9997C14.1962 30.8632 16.7301 28.3483 19.8476 28.3483C22.9651 28.3483 25.499 30.8822 25.499 33.9997V48.1353C25.499 51.2718 22.9651 53.7867 19.8476 53.7867C16.7301 53.7867 14.1962 51.2718 14.1962 48.1353V33.9997Z"
          fill="#E01E5A"
        />
        <path
          d="M19.8662 11.2673C16.7296 11.2673 14.2148 8.73347 14.2148 5.61594C14.2148 2.49842 16.7486 -0.0354538 19.8662 -0.0354538C22.9837 -0.0354538 25.5175 2.49842 25.5175 5.61594V11.2673H19.8662Z"
          fill="#36C5F0"
        />
        <path
          d="M19.8682 14.1334C23.0047 14.1334 25.5196 16.6673 25.5196 19.7848C25.5196 22.9023 22.9857 25.4362 19.8682 25.4362H5.67566C2.53916 25.4362 0.0242615 22.9023 0.0242615 19.7848C0.0242615 16.6673 2.55814 14.1334 5.67566 14.1334H19.8682Z"
          fill="#36C5F0"
        />
        <path
          d="M42.5323 19.7853C42.5323 16.6488 45.0662 14.1339 48.1837 14.1339C51.3012 14.1339 53.8351 16.6678 53.8351 19.7853C53.8351 22.9028 51.3012 25.4367 48.1837 25.4367H42.5323V19.7853Z"
          fill="#2EB67D"
        />
        <path
          d="M39.7126 19.7934C39.7126 22.9299 37.1787 25.4448 34.0612 25.4448C30.9436 25.4448 28.4098 22.911 28.4098 19.7934V5.61986C28.4098 2.48336 30.9436 -0.0315399 34.0612 -0.0315399C37.1787 -0.0315399 39.7126 2.48336 39.7126 5.61986V19.7934Z"
          fill="#2EB67D"
        />
        <path
          d="M34.0376 42.482C37.1741 42.482 39.689 45.0158 39.689 48.1334C39.689 51.2509 37.1552 53.7848 34.0376 53.7848C30.9201 53.7848 28.3862 51.2509 28.3862 48.1334V42.482H34.0376Z"
          fill="#ECB22E"
        />
        <path
          d="M34.0381 39.6507C30.9016 39.6507 28.3867 37.1168 28.3867 33.9993C28.3867 30.8818 30.9206 28.3479 34.0381 28.3479H48.2306C51.3671 28.3479 53.882 30.8818 53.882 33.9993C53.882 37.1168 51.3482 39.6507 48.2306 39.6507H34.0381Z"
          fill="#ECB22E"
        />
      </g>
      <defs>
        <clipPath id="clip0_4127_70105">
          <rect width="54" height="54" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
