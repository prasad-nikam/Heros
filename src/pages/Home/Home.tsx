import { Link } from "react-router-dom";
import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import AgnceImg from "./assets/Agnce.png";
import EzcardImg from "./assets/Ezcard.png";
import PaymarkImg from "./assets/Paymark.png";
import TeamsyncImg from "./assets/Teamsync.png";
import TrustLineImg from "./assets/TrustLine.png";

const projects = [
  {
    name: "EzCard",
    description:
      "Banking experience redesigned with simplicity and speed in mind.",
    stack: ["React", "Motion", "Tailwind"],
    image: EzcardImg,
    path: "/ezcard",
  },
  {
    name: "Paymark",
    description:
      "Payments interface balancing dense information with clean UX.",
    stack: ["React", "TypeScript"],
    image: PaymarkImg,
    path: "/paymark",
  },
  {
    name: "TrustLine",
    description:
      "A modern fintech dashboard focused on trust, clarity and data visualization.",
    stack: ["React", "TypeScript", "Tailwind"],
    image: TrustLineImg,
    path: "/trustline",
  },
  {
    name: "Agnce",
    description: "Bold landing page exploring premium SaaS visual language.",
    stack: ["React", "Tailwind"],
    image: AgnceImg,
    path: "/agnce",
  },
  {
    name: "Teamsync",
    description: "Collaborative workspace designed around productivity.",
    stack: ["React", "Tailwind"],
    image: TeamsyncImg,
    path: "/teamsync",
  },
];

export default function Home() {
  return (
    <>
      <Analytics />

      <main className="bg-neutral-950 text-neutral-100">
        {/* HERO */}

        <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-10 md:px-12">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-2 text-sm text-neutral-400">
              <MapPin size={15} />
              Pune, India
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-balance md:text-7xl">
              Prasad Nikam
            </h1>

            <h2 className="mt-4 max-w-3xl text-2xl font-medium text-balance text-neutral-300 md:text-3xl">
              Frontend Engineer crafting polished web experiences with React,
              TypeScript and thoughtful design.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-pretty text-neutral-400">
              I enjoy turning complex products into interfaces that feel simple,
              fast and delightful. My focus is building production-ready
              applications where design and engineering work together.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://github.com/prasad-nikam/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-800 px-6 py-3 transition hover:border-neutral-600"
              >
                <Github size={18} />
                GitHub
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="mailto:nikamprasad52@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
              >
                <Mail size={18} />
                Contact
              </a>
            </div>
          </div>

          {/* <div className="mt-28 grid gap-10 border-t border-neutral-900 pt-12 md:grid-cols-3">
            <div>
              <p className="text-sm text-neutral-500">CURRENTLY</p>

              <p className="mt-3 text-lg leading-8 text-neutral-300">
                Building a production-ready LMS platform while continuously
                refining frontend architecture and user experience.
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">FOCUS</p>

              <p className="mt-3 text-lg leading-8 text-neutral-300">
                React, TypeScript, Tailwind CSS, Motion, scalable component
                systems and modern frontend engineering.
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">LEARNING</p>

              <p className="mt-3 text-lg leading-8 text-neutral-300">
                Go, backend architecture, distributed systems and video
                infrastructure.
              </p>
            </div>
          </div> */}
        </section>

        {/* ABOUT */}

        {/* <section className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-28 md:px-12">
          <div className="grid gap-16 lg:grid-cols-[220px_1fr]">
            <h3 className="text-xl font-medium text-white">About</h3>

            <div className="space-y-8">
              <p className="max-w-4xl text-3xl leading-relaxed font-medium tracking-[-0.02em] text-neutral-200">
                I'm a frontend engineer who believes great interfaces aren't
                created by adding more—they're created by removing friction.
              </p>

              <p className="max-w-3xl text-lg leading-8 text-neutral-400">
                Over the past few years I've worked extensively with React,
                TypeScript and modern frontend tooling, building everything from
                dashboards and fintech experiences to complete learning
                management systems.
              </p>

              <p className="max-w-3xl text-lg leading-8 text-neutral-400">
                I care deeply about performance, accessibility, reusable
                architecture and the small interactions that make software
                enjoyable to use.
              </p>
            </div>
          </div>
        </section> */}

        {/* FEATURED WORK */}

        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.03em]">
                Selected Work
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-neutral-400">
                A collection of interface explorations, product redesigns and
                frontend experiments built with React.
              </p>
            </div>
          </div>

          <div className="space-y-24">
            {projects.map((project) => (
              <Link
                key={project.path}
                to={project.path}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-900/40">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-3xl font-semibold">{project.name}</h3>

                    <p className="mt-3 max-w-2xl text-lg leading-8 text-neutral-400">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BUILDING NOW */}

        {/* <section className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-32 md:px-12">
          <div className="grid gap-16 lg:grid-cols-[220px_1fr]">
            <div>
              <h2 className="text-xl font-medium">Building Now</h2>
            </div>

            <div className="space-y-16">
              <div>
                <h3 className="text-4xl font-semibold tracking-[-0.03em]">
                  Production Learning Management System
                </h3>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-400">
                  I'm currently building a complete Learning Management System
                  from the ground up. The project includes student management,
                  secure video streaming, authentication, course creation,
                  payments and a scalable architecture designed for real
                  coaching institutes.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-sm text-neutral-500">Frontend</p>

                  <p className="mt-3 leading-8 text-neutral-300">
                    React, TypeScript, Tailwind CSS, Motion
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500">Backend</p>

                  <p className="mt-3 leading-8 text-neutral-300">
                    Node.js, Express, MongoDB
                  </p>
                </div>

                <div>
                  <p className="text-sm text-neutral-500">Infrastructure</p>

                  <p className="mt-3 leading-8 text-neutral-300">
                    Cloudflare R2, HLS Streaming, FFmpeg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* EXPERIENCE */}

        <section className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-32 md:px-12">
          <div className="grid gap-20 lg:grid-cols-[220px_1fr]">
            <h2 className="text-xl font-medium">Experience</h2>

            <div className="space-y-16">
              <div className="flex flex-col justify-between gap-4 border-b border-neutral-900 pb-12 md:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Freelance & Personal Projects
                  </h3>

                  <p className="mt-3 max-w-2xl leading-8 text-neutral-400">
                    Building production-ready web applications with a strong
                    focus on frontend architecture, user experience and
                    maintainable code.
                  </p>
                </div>

                <span className="text-neutral-500">2024 — Present</span>
              </div>

              <div className="flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Frontend Development
                  </h3>

                  <p className="mt-3 max-w-2xl leading-8 text-neutral-400">
                    Worked on dashboards, landing pages, fintech interfaces and
                    design systems while continuously improving frontend
                    performance, accessibility and developer experience.
                  </p>
                </div>

                <span className="text-neutral-500">
                  React · TypeScript · Tailwind
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}

        <section className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-32 md:px-12">
          <div className="grid gap-20 lg:grid-cols-[220px_1fr]">
            <h2 className="text-xl font-medium">Technologies</h2>

            <div>
              <div className="grid grid-cols-2 gap-y-12 md:grid-cols-3">
                <div>
                  <p className="text-neutral-500">Frontend</p>

                  <ul className="mt-5 space-y-3 text-lg">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Motion</li>
                  </ul>
                </div>

                <div>
                  <p className="text-neutral-500">Backend</p>

                  <ul className="mt-5 space-y-3 text-lg">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>REST APIs</li>
                    <li>JWT</li>
                  </ul>
                </div>

                <div>
                  <p className="text-neutral-500">Currently Learning</p>

                  <ul className="mt-5 space-y-3 text-lg">
                    <li>Go</li>
                    <li>System Design</li>
                    <li>Distributed Systems</li>
                    <li>Cloud Infrastructure</li>
                    <li>Video Streaming</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}

        <section className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-32 md:px-12">
          <div className="max-w-4xl">
            <p className="text-sm tracking-[0.18em] text-neutral-500 uppercase">
              Philosophy
            </p>

            <h2 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-balance">
              Good interfaces don't ask users to think. They quietly guide them
              toward the next action.
            </h2>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-400">
              I enjoy simplifying complex products through thoughtful
              interaction, consistent systems and attention to detail. Every
              component should have a reason to exist, every animation should
              communicate something and every line of code should be easy to
              maintain six months later.
            </p>
          </div>
        </section>

        {/* CONTACT */}

        <section className="mx-auto max-w-7xl border-t border-neutral-900 px-6 py-32 md:px-12">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="max-w-2xl text-5xl font-semibold tracking-[-0.04em]">
                Interested in working together?
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
                Whether it's a product, a redesign or a frontend engineering
                challenge, I'd love to hear about it.
              </p>
            </div>

            <a
              href="mailto:nikamprasad52@gamil.com"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition hover:scale-[1.02]"
            >
              Let's Talk
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
