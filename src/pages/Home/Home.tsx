import { Link } from "react-router-dom";

const heroes = [
  { name: "Agnce", path: "/agnce" },
  { name: "Paymark", path: "/paymark" },
  { name: "TeamSync", path: "/teamsync" },
  { name: "EzCard", path: "/ezcard" },
  { name: "TrustLine", path: "/trustline" },
];

function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 p-10 text-white">
      <h1 className="mb-10 text-4xl font-bold">Hero Showcase</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {heroes.map((hero) => (
          <Link
            key={hero.path}
            to={hero.path}
            className="rounded-xl bg-neutral-900 p-6 transition hover:bg-neutral-800"
          >
            <h2 className="text-xl font-semibold">{hero.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
