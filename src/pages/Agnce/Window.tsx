import {
  Captions,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  HandCoins,
  PanelBottom,
  ReceiptIcon,
} from "lucide-react";
function Window() {
  return (
    <div className="size-full bg-white">
      <div className="flex h-13 w-full items-center bg-neutral-100">
        <div className="flex h-full w-1/2 items-center">
          <div className="mx-4 flex h-full items-center justify-start gap-2">
            <div className="size-3 rounded-full bg-red-400"></div>
            <div className="size-3 rounded-full bg-yellow-400"></div>
            <div className="size-3 rounded-full bg-green-400"></div>
          </div>
          <Captions className="mx-1 size-5 text-neutral-500" />
          <div className="h-4 w-px bg-neutral-300"></div>
          <ChevronDown className="mx-1 size-4 text-neutral-500" />
          <ChevronLeft className="mx-1 ml-3 size-5 text-neutral-500" />
          <ChevronRight className="mx-1 size-5 text-neutral-500" />
        </div>
        <div className="flex h-full w-1/2 items-center justify-end">
          <div className="relative flex h-8 w-full items-center justify-center rounded-lg border-2 border-neutral-300">
            <PanelBottom className="absolute left-1 text-neutral-500" />
            <div className="text-sm text-neutral-500">agnce.io</div>
          </div>
        </div>
      </div>

      <div className="flex h-20 w-full items-center px-6 text-2xl font-semibold text-neutral-900">
        Welcome back, Anb agency! 👋🏻
      </div>
      <div className="h-full w-full bg-neutral-100 px-6">
        <div className="flex h-fit w-fit gap-5 border-t-2 border-neutral-200 py-5">
          <Card
            label="Total Revenue"
            Logo={<HandCoins className="text-neutral-500" />}
            amount="106,376.10"
            description="From paid invoices"
          />

          <Card
            label="Pending invoices"
            Logo={<ReceiptIcon className="text-neutral-500" />}
            amount="92,035.92"
            description="12 pending invoices"
          />

          <Card
            label="Pending oders"
            Logo={<CircleDollarSign className="text-neutral-500" />}
            amount="106,376.10"
            description="2 pending orders"
          />
        </div>
        <div className="flex h-100 w-full gap-4">
          <div className="h-full w-100 rounded-xl border-2 border-neutral-200 bg-white">
            <div className="mx-6 mt-4 flex h-14 items-center justify-between border-b-2 border-dashed border-neutral-200">
              <div className="text-2xl font-semibold text-neutral-900">
                Commissions
              </div>
              <button className="mr-1 rounded-md border border-neutral-200 bg-neutral-100 px-2 text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800">
                {" "}
                + View all
              </button>
            </div>
            <div className="mx-6 mt-2 text-2xl font-semibold text-neutral-900">
              $306,376.10
            </div>
            <Chart />
          </div>

          <div className="h-full w-100 rounded-xl border-2 border-neutral-200 bg-white">
            <div className="mx-6 mt-4 flex h-14 items-center justify-between border-b-2 border-dashed border-neutral-200">
              <div className="text-2xl font-semibold text-neutral-900">
                Invioces
              </div>
              <button className="mr-1 rounded-md border border-neutral-200 bg-neutral-100 px-2 text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800">
                {" "}
                + View all
              </button>
            </div>
            <div className="mt-2 px-6 py-2">
              <div className="text-sm font-semibold text-neutral-800">
                INV-2025-036
              </div>
              <div className="mt-1 text-xs font-bold text-neutral-500">
                $100.00
              </div>
            </div>
            <div className="mt-2 px-6 py-2">
              <div className="text-sm font-semibold text-neutral-900">
                INV-2025-037
              </div>
              <div className="mt-1 text-xs font-bold text-neutral-500">
                $150.00
              </div>
            </div>
            <div className="mt-2 px-6 py-2">
              <div className="text-sm font-semibold text-neutral-900">
                INV-2025-038
              </div>
              <div className="mt-1 text-xs font-bold text-neutral-500">
                $200.00
              </div>
            </div>
            <div className="mt-2 px-6 py-2">
              <div className="text-sm font-semibold text-neutral-900">
                INV-2025-039
              </div>
              <div className="mt-1 text-xs font-bold text-neutral-500">
                $300.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Window;

type CardsProps = {
  label: string;
  Logo: React.ReactNode;
  amount: string;
  description: string;
};

const Card = ({ label, Logo, amount, description }: CardsProps) => {
  return (
    <div className="h-36 w-60 rounded-xl border-2 border-neutral-200 bg-white px-4">
      <div className="flex h-16 items-center border-b-2 border-dashed border-neutral-300">
        <div className="flex size-10 items-center justify-center rounded-md border-2 border-neutral-200 bg-neutral-100">
          {Logo}
        </div>
        <div className="ml-4 text-center text-lg font-semibold text-neutral-600">
          {label}
        </div>
      </div>
      <div className="mt-2 text-2xl font-bold text-blue-400">${amount}</div>
      <div className="mt-1 text-sm text-neutral-500">{description}</div>
    </div>
  );
};

const Chart = () => {
  return (
    <div className="my-4 flex h-50 w-full items-center justify-around px-6">
      <div className="relative h-full w-6 bg-neutral-200">
        <div className="absolute right-0 bottom-0 left-0 mt-auto h-20 w-full rounded-t-lg bg-blue-400"></div>
      </div>
      <div className="relative h-full w-6 bg-neutral-200">
        <div className="absolute right-0 bottom-0 left-0 mt-auto h-30 w-full rounded-t-lg bg-blue-400"></div>
      </div>
      <div className="relative h-full w-6 bg-neutral-200">
        <div className="absolute right-0 bottom-0 left-0 mt-auto h-40 w-full rounded-t-lg bg-blue-400"></div>
      </div>
      <div className="relative h-full w-6 bg-neutral-200">
        <div className="absolute right-0 bottom-0 left-0 mt-auto h-35 w-full rounded-t-lg bg-blue-400"></div>
      </div>
      <div className="relative h-full w-6 bg-neutral-200">
        <div className="absolute right-0 bottom-0 left-0 mt-auto h-20 w-full rounded-t-lg bg-blue-400"></div>
      </div>
      <div className="relative h-full w-6 bg-neutral-200">
        <div className="absolute right-0 bottom-0 left-0 mt-auto h-25 w-full rounded-t-lg bg-blue-400"></div>
      </div>
    </div>
  );
};
