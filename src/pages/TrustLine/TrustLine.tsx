import Cards from "./Cards";
import Hero from "./Hero";
import Navbar from "./Navbar";

const TrustLine = () => {
  return (
    <div className="flex h-screen min-h-screen w-full flex-col justify-start overflow-hidden bg-[#FBFDFF] pt-4 text-[#111527]">
      <Navbar />
      <Hero />
      <Cards />
      {/* <div className="flex-1">
      </div> */}
    </div>
  );
};

export default TrustLine;
