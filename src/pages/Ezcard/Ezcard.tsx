import Hero from "./Hero";
import Navbar from "./Navbar";

const Ezcard = () => {
  return (
    <div className="flex h-screen w-full bg-neutral-50 p-2 text-neutral-900">
      <div className="mx-auto h-full w-7xl">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Ezcard;
