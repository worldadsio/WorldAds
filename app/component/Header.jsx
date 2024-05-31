"use client";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    console.log("Drawer open state:", isDrawerOpen);
  };

  const dropDownOpen = () => {
    setOpen(!open);
    setDrop(!drop);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 10) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset = section.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollTo =
        topOffset - (windowHeight / 2 - section.offsetHeight / 2);
      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className={`fixed w-full z-40 top-0 bg-[#BF2506] py-6 lg:p-7`}>
      <div className="relative w-[85%] mx-auto flex justify-between items-center bg-transparent">
        <Link href="/">
          <img
            src="./assets/images/logo.png"
            alt="Logo"
            className="lg:w-52 lg:h-12 w-36 h-8"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <button
          className="bg-[#FFFFFF1A] border-2 border-white lg:px-6 lg:py-3 px-3 py-1 hover:border rounded-[100px]"
          type="button"
          onClick={dropDownOpen}
        >
          <img src="./assets/images/bars.svg" alt="Menu" className="w-6" />
        </button>

        {drop && (
          <div
            className="w-[100%] lg:hidden block gradient-color absolute top-0 right-0 left-0 border border-white rounded-2xl h-60"
            style={{ backdropFilter: "blur(50px)" }}
          >
            <ul className="px-5 space-y-3 text-center text-lg text-white">
              <li>
                <RxCross2 className="text-2xl font-bold float-right" />
              </li>
              <li className="pt-10">
                <Link href="/">About</Link>
              </li>
              <li>
                <a
                  href="#nodeOperator"
                  onClick={() => handleNavigation("nodeOperator")}
                >
                  Node Operators
                </a>
              </li>
              <li>
                <a href="#ride" onClick={() => handleNavigation("ride")}>
                  Ride & Earn
                </a>
              </li>
              <li>
                <a
                  href="#advertise"
                  onClick={() => handleNavigation("advertise")}
                >
                  Advertise With WorldAds
                </a>
              </li>
            </ul>
          </div>
        )}

        {open && (
          <div className="absolute lg:block hidden top-0 right-0 border-2 bg-red-600 border-white rounded-full p-2">
            <ul className="px-5 flex items-center space-x-5 text-lg text-white justify-between">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <a
                  href="#nodeOperator"
                  onClick={() => handleNavigation("nodeOperator")}
                >
                  Node Operators
                </a>
              </li>
              <li>
                <a href="#ride" onClick={() => handleNavigation("ride")}>
                  Ride & Earn
                </a>
              </li>
              <li>
                <a
                  href="#advertise"
                  onClick={() => handleNavigation("advertise")}
                >
                  Advertise With WorldAds
                </a>
              </li>
              <li>
                <RxCross2 className="text-2xl font-bold" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
