import { cn } from "@/lib/utils";

const CustomersCard = () => {
  return (
    <div className="shadow-box z-9 rounded-md bg-white p-2">
      <div className="py-1 text-xs">Your Customers</div>
      <div className="grid grid-cols-3 gap-2 bg-white">
        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        ></div>
        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        >
          <img
            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full rounded-sm border border-neutral-300 object-cover"
          />
        </div>

        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        ></div>
        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full rounded-sm border border-neutral-300 object-cover"
          />
        </div>
        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        ></div>
        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        >
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full rounded-sm border border-neutral-300 object-cover"
          />
        </div>
        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        ></div>
        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        >
          <img
            src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-full w-full rounded-sm border border-neutral-300 object-cover"
          />
        </div>
        <div
          className={cn("shadow-box-small size-12 rounded-sm bg-white p-0.5")}
        ></div>
      </div>
    </div>
  );
};

export default CustomersCard;
