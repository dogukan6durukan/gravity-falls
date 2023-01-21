import Wrapper from "../components/Wrapper"
import Link from "next/link";
import { Routes } from "@/types/routeTypes";

type Route = Routes['client'];
const route : Route = {
  docs : '/documentation',
  githubowner : 'https://github.com/dogukan6durukan',
  projectsource : "https://github.com/dogukan6durukan/gravity-falls-api"
}


export default function About() {
  return (
    <Wrapper className="sm:w-3/4 sm:px-0 px-6 m-auto py-8">
      <div className="space-y-5 [&>div]:py-4 [&>div>h2]:heading sm:[&>div>*]:paragraph">
        <h1 className="text-4xl text-stone-700 font-bold">About</h1>

        <div className="">
          <h2>What is this?</h2>
          <p>
          The Gravity Falls API is a REST API based on the television
            show Gravity Falls. In this API you will access the characters and
            their pieces of information that are already in the TV Show.
          </p>

          <Link href={route.docs!} className="link">Check out the documentation for more</Link>

        </div>

        <div>
          <h2>Who are you?</h2>
          <p>
            I am <Link href={route.githubowner!} className="link">Dogukan Durukan</Link>. Dogukan is a Full Stack Developer
             and always eager to build an applications with different ways and not afraid to use any technologies also he is a fitness enthusiast.
          </p>
        </div>

        <div>
          <h2>Where is this idea coming from?</h2>
          <p>
            My childhood literally passed with Gravity Falls show, and I was always chasing and waiting
            for a new episode to watch. After a years working as developer now who loves making open source projects
            decided to build an open source for this childhood show too.

          </p>
        </div>

        <div>
          <h2>Technical Ingedients?</h2>
          <p>
            This entire project is hosted on <Link className="link" href="https://vercel.com/">Vercel.</Link> I use <Link href="https://nextjs.org/" className="link">Next JS</Link> and <Link className="link" href="https://www.typescriptlang.org/">Typescript</Link> for building this application.
            Use <Link className="link" href="https://planetscale.com/">Planetscale</Link> for storing datas and <Link href="https://www.prisma.io/" className="link">Prisma</Link> ORM for executing operations on database.
          </p>
        </div>

        <div>
          <h2>How can I contribute to the project?</h2>
          <p>
          You can contribute on <Link className="link" href={route.projectsource!}>GitHub.</Link> This project is open to any fixes and improvements. So don't be shy for collaborating on this project.</p>
        </div>

      </div>
    </Wrapper>
  );
}
