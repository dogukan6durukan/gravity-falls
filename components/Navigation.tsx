import Link from "next/link";
import { Routes } from "../types/routeTypes";

type Route = Routes['client'];

const route : Route = {
    home : '/',
    about : '/about',
    docs : '/documentation',
    projectsource : "https://github.com/dogukan6durukan/gravity-falls-api"    
}
export default function Navigation() {
  

    return (
    <div className="text-center sticky top-0 w-full bg-stone-900 sm:text-base text-sm text-white py-3">
      <ul className="flex justify-center space-x-5">
        <li>
          <Link href={route.home!}>Home</Link>
        </li>
        <li>
            <Link href={route.about!}>About</Link>
        </li>
        <li>
            <Link href={route.docs!}>Docs</Link>
        </li>
        <li className="flex items-center space-x-2">
            <Link href={route.projectsource!}>Source</Link>
            <img src="github-mark-white.svg" className="w-5 h-5"/>
        </li>
      </ul>
    </div>
  );
}
