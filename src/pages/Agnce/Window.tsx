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
		<div className="size-full bg-white ">
			<div className="h-13 w-full bg-neutral-100 flex items-center">
				<div className="h-full w-1/2 flex items-center">
					<div className=" h-full mx-4 flex gap-2 justify-start items-center">
						<div className="size-3 bg-red-400 rounded-full"></div>
						<div className="size-3 bg-yellow-400 rounded-full"></div>
						<div className="size-3 bg-green-400 rounded-full"></div>
					</div>
					<Captions className="text-neutral-500 size-5 mx-1" />
					<div className="h-4 w-px bg-neutral-300 "></div>
					<ChevronDown className="text-neutral-500 size-4 mx-1" />
					<ChevronLeft className="text-neutral-500 size-5 mx-1 ml-3" />
					<ChevronRight className="text-neutral-500 size-5 mx-1" />
				</div>
				<div className="h-full w-1/2 flex justify-end items-center">
					<div className="h-8 w-full border-2 border-neutral-300 rounded-lg flex items-center justify-center relative">
						<PanelBottom className="absolute left-1 text-neutral-500" />
						<div className="text-sm text-neutral-500">agnce.io</div>
					</div>
				</div>
			</div>

			<div className="h-20 w-full text-2xl text-neutral-900 font-semibold px-6 flex items-center">
				Welcome back, Anb agency! 👋🏻
			</div>
			<div className=" h-full w-full bg-neutral-100 px-6">
				<div className="h-fit w-fit flex gap-5  py-5 border-t-2 border-neutral-200">
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
				<div className="h-100 w-full flex gap-4">
					<div className="bg-white h-full w-100 rounded-xl border-2 border-neutral-200">
						<div className="h-14 mx-6 mt-4 border-b-2 border-dashed border-neutral-200 flex items-center justify-between">
							<div className="text-2xl text-neutral-900 font-semibold">
								Commissions
							</div>
							<button className="bg-neutral-100 rounded-md border border-neutral-200 px-2 text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800 mr-1">
								{" "}
								+ View all
							</button>
						</div>
						<div className="text-2xl mx-6 mt-2 text-neutral-900 font-semibold">
							$306,376.10
						</div>
						<Chart />
					</div>

					<div className="bg-white h-full w-100 rounded-xl border-2 border-neutral-200">
						<div className="h-14 mx-6 mt-4 border-b-2 border-dashed border-neutral-200 flex items-center justify-between">
							<div className="text-2xl text-neutral-900 font-semibold">
								Invioces
							</div>
							<button className="bg-neutral-100 rounded-md border border-neutral-200 px-2 text-neutral-900 hover:bg-neutral-200 hover:text-neutral-800 mr-1">
								{" "}
								+ View all
							</button>
						</div>
						<div className="px-6 py-2 mt-2">
							<div className="text-sm font-semibold text-neutral-800">
								INV-2025-036
							</div>
							<div className="text-xs text-neutral-500 font-bold mt-1">
								$100.00
							</div>
						</div>
						<div className="px-6 py-2 mt-2">
							<div className="text-sm font-semibold text-neutral-900">
								INV-2025-037
							</div>
							<div className="text-xs text-neutral-500 font-bold mt-1">
								$150.00
							</div>
						</div>
						<div className="px-6 py-2 mt-2">
							<div className="text-sm font-semibold text-neutral-900">
								INV-2025-038
							</div>
							<div className="text-xs text-neutral-500 font-bold mt-1">
								$200.00
							</div>
						</div>
						<div className="px-6 py-2 mt-2">
							<div className="text-sm font-semibold text-neutral-900">
								INV-2025-039
							</div>
							<div className="text-xs text-neutral-500 font-bold mt-1">
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
		<div className="bg-white h-36 w-60 rounded-xl px-4 border-2 border-neutral-200">
			<div className="flex items-center h-16 border-b-2 border-dashed border-neutral-300">
				<div className="size-10 rounded-md border-2 border-neutral-200 bg-neutral-100 flex items-center justify-center">
					{Logo}
				</div>
				<div className="ml-4 text-lg text-neutral-600 text-center font-semibold">
					{label}
				</div>
			</div>
			<div className="mt-2 text-2xl font-bold text-blue-400">
				${amount}
			</div>
			<div className="text-neutral-500 text-sm mt-1">{description}</div>
		</div>
	);
};

const Chart = () => {
	return (
		<div className="h-50 w-full flex items-center  justify-around px-6 my-4">
			<div className="h-full w-6 bg-neutral-200 relative">
				<div className="h-20 w-full bg-blue-400 rounded-t-lg mt-auto absolute left-0 right-0 bottom-0"></div>
			</div>
			<div className="h-full w-6 bg-neutral-200 relative">
				<div className="h-30 w-full bg-blue-400 rounded-t-lg mt-auto absolute left-0 right-0 bottom-0"></div>
			</div>
			<div className="h-full w-6 bg-neutral-200 relative">
				<div className="h-40 w-full bg-blue-400 rounded-t-lg mt-auto absolute left-0 right-0 bottom-0"></div>
			</div>
			<div className="h-full w-6 bg-neutral-200 relative">
				<div className="h-35 w-full bg-blue-400 rounded-t-lg mt-auto absolute left-0 right-0 bottom-0"></div>
			</div>
			<div className="h-full w-6 bg-neutral-200 relative">
				<div className="h-20 w-full bg-blue-400 rounded-t-lg mt-auto absolute left-0 right-0 bottom-0"></div>
			</div>
			<div className="h-full w-6 bg-neutral-200 relative">
				<div className="h-25 w-full bg-blue-400 rounded-t-lg mt-auto absolute left-0 right-0 bottom-0"></div>
			</div>
		</div>
	);
};
