import Navbar from "./Navbar";
import Hero from "./Hero";
function Agnce() {
  return (
    <div className="h-screen min-h-screen w-full bg-white p-2">
      <div className="flex h-full w-full flex-col rounded-md bg-neutral-100">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default Agnce;
