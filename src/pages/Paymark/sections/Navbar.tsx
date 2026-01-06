import { Fan, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="z-9 mx-5 flex items-center justify-between py-4 text-white md:mx-20">
      <div className="flex gap-2">
        <Fan />
        <div>PAYMARK</div>
      </div>
      <div className="ml-20 flex items-center justify-between gap-8">
        <button className="hover:text-gray-300">About</button>
        <button className="hover:text-gray-300">Features</button>
        <button className="hover:text-gray-300">Pricing</button>
        <button className="hover:text-gray-300">Blogs</button>
      </div>
      <div className="flex items-center justify-between gap-8">
        <button>
          <ShoppingCart />
        </button>
        <button>Login</button>
        <button className="h-12 rounded-full bg-neutral-100 px-4 text-neutral-800 hover:bg-neutral-400 cursor-pointer">
          Open Account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
