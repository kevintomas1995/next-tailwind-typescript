import Link from "next/link";
import React from "react";

const Navbar:React.FC<{ toggle: (event: React.MouseEvent<HTMLDivElement>) => void }> = (props) => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono" role="navigation">
      <Link href="/">
        <a className="pl-8">DEMO</a>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={props.toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 hidden md:block">
        <Link href="/">
          <a className="p-4">Home</a>
        </Link>
        <Link href="/menu">
          <a className="p-4">Menu</a>
        </Link>
        <Link href="/about">
          <a className="p-4">About</a>
        </Link>
        <Link href="/contact">
          <a className="p-4">Contact</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
