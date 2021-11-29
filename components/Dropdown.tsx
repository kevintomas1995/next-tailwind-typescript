import React from "react";
import Link from "next/link";

const Dropdown:React.FC<{ toggle: (event: React.MouseEvent<HTMLDivElement>) => void, isOpen: boolean}> = (props) => {
  return (
    <div className={props.isOpen ? " grid grid-rows-4 text-center items-center bg-yellow-500" : "hidden"}
    onClick={props.toggle}>
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
  );
}

export default Dropdown;
