import { Link } from "react-router-dom";
import AgnceImg from "./assets/Agnce.png";
import PaymarkImg from "./assets/Paymark.png";
import TeamsyncImg from "./assets/Teamsync.png";
import EzcardImg from "./assets/Ezcard.png";
import TrustLineImg from "./assets/TrustLine.png";
import { Analytics } from "@vercel/analytics/react";

const heroes = [
  { name: "TrustLine", path: "/trustline", img: TrustLineImg },
  { name: "EzCard", path: "/ezcard", img: EzcardImg },
  { name: "Agnce", path: "/agnce", img: AgnceImg },
  { name: "Paymark", path: "/paymark", img: PaymarkImg },
  { name: "Teamsync", path: "/teamsync", img: TeamsyncImg },
];

function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 p-8 text-white">
      <h1 className="mb-8 text-center text-5xl font-bold text-white">
        Hero Showcase
      </h1>
      <p className="mb-8 text-center text-lg text-gray-300">
        Explore our collection of amazing hero sections
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {heroes.map((hero) => (
          <Link
            key={hero.path}
            to={hero.path}
            className="group relative overflow-hidden rounded-2xl bg-neutral-900 p-6 transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-2xl"
          >
            <div className="h-fit overflow-hidden rounded-xl bg-neutral-800">
              <img
                src={hero.img}
                alt={hero.name}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h2 className="mt-4 text-center text-xl font-semibold text-white group-hover:text-blue-400">
              {hero.name}
            </h2>
          </Link>
        ))}
      </div>
      <Analytics />
    </div>
  );
}

export default Home;
