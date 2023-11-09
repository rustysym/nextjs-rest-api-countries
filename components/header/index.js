"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import {IoMoonSharp,IoMoonOutline} from 'react-icons/io5'
function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <header
      className={
        "h-16 bg-elements-white text-light-text dark:bg-dark-blue-elements dark:text-elements-white"
      }
    >
      <div className="flex flex-row justify-between px-12 lg:px-36 py-5">
        <Link className="font-bold" href={'/'}>Where in the world?</Link>
        <button
          className="capitalize"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          <div className="flex flex-row text-center items-center gap-2">{resolvedTheme === "dark" ? (<><IoMoonSharp/> light</>) : (<><IoMoonOutline/> dark</>)} Mode</div>
        </button>
      </div>
    </header>
  );
}

export default Header;
