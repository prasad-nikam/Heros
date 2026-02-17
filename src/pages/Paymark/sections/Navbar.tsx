import { useState, useCallback } from "react";
import { Fan, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-20 py-3 text-white backdrop-blur-sm">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 text-lg font-semibold">
          <Fan size={22} />
          PAYMARK
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button className="hover:text-gray-300">About</button>
          <button className="hover:text-gray-300">Features</button>
          <button className="hover:text-gray-300">Pricing</button>
          <button className="hover:text-gray-300">Blogs</button>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button>
            <ShoppingCart size={20} />
          </button>
          <button className="hover:text-gray-300">Login</button>
          <button className="h-10 rounded-full bg-neutral-100 px-5 text-neutral-800 hover:bg-neutral-300 transition">
            Open Account
          </button>
        </div>


        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      {open && (
        <div className="absolute left-0 top-full w-full bg-neutral-900/80 mt-4 rounded-xl p-6 flex flex-col gap-5 md:hidden shadow-xl">
          <button className="text-left">About</button>
          <button className="text-left">Features</button>
          <button className="text-left">Pricing</button>
          <button className="text-left">Blogs</button>

          <div className="border-t border-neutral-700 pt-4 flex flex-col gap-4">
            <button className="flex items-center gap-2">
              <ShoppingCart size={18} />
              Cart
            </button>
            <button>Login</button>
            <button className="h-10 rounded-full bg-neutral-100 text-neutral-800">
              Open Account
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
