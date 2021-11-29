import Navbar from "./Navbar";
import Footer from "./Footer";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 760 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", hideMenu)

    return () => {
      window.removeEventListener("resize", hideMenu)
    }
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      <main>{children}</main>
      <Footer />
    </>
  );
};
