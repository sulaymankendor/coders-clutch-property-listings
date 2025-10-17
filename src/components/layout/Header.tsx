import React, { useState } from "react";
import { navs } from "../../utils/data";

function Header() {
  const [showNavs, setShowNavs] = useState(false);
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-[3000] backdrop-blur-sm border-b border-gray-400/20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-3 px-6">
          {/* Logo Section */}
          <p className="font-bold text-xl">
            <span className="text-sky-700">K</span>ord{""}
            <span className="text-sky-700">a</span>
          </p>

          {/* Navigation */}
          <nav className="max-sm:hidden lg:flex items-center space-x-1">
            {navs.map((nav) => {
              //   const isActive =
              //     pathname === nav.link
              //       ? true
              //       : pathname === nav.link
              //       ? true
              //       : pathname.includes(nav.link + "/");

              return (
                <a
                  key={nav.id}
                  href={nav.href}
                  className={`relative rounded-xl px-6 py-3 hover:bg-sky-100 hover:text-sky-600 font-medium text-sm tracking-wide transition-all duration-300 group
                  ${true ? "bg-sky-100 text-sky-600" : "bg-white"}`}
                >
                  {nav.name}
                </a>
              );
            })}
            {/* <button
              onClick={() => alert("asd")}
              className="flex items-center border rounded-full gap-1 w-[8rem] hover:bg-gray-100 transition-all px-3 py-2 cursor-pointer"
            >
              <SearchIcon size={19} className="text-gray-400" />
              <p className="text-gray-400 text-sm">Search...</p>
            </button> */}
          </nav>

          {/* Contact Button */}
          <div className="flex max-sm:hidden items-center space-x-4">
            <a
              href={"/sign-up"}
              className="border-sky-500 hover:border-sky-400 transition-all border-[1.5px] text-sm bg-sky-600 hover:bg-sky-500 text-white px-7 py-3 rounded-lg font-medium"
            >
              Sign In
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setShowNavs((showNav) => !showNav);
            }}
            className="p-2 sm:hidden text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            {showNavs ? (
              //   <X className="text-white" />
              "X"
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation - you can expand this as needed */}
        {showNavs && (
          <div className="lg:hidden border-t border-cyan-400/20">
            <nav className="py-4 space-y-2">
              {navs.map((nav) => (
                <a
                  key={nav.id}
                  href={nav.href}
                  className="block font-medium text-lg  px-7 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  {nav.name}
                </a>
              ))}
              <a
                href={"#contact-us"}
                className="block font-medium text-lg  px-7 py-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </header>
  );
}

export default Header;
