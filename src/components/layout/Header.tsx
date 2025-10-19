import { useState } from "react";
import { navs } from "../../utils/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { handleSignOut } from "@/utils/handleSignOut";

function Header() {
  const pathname = useLocation().pathname;
  const [showNavs, setShowNavs] = useState(false);
  const navigate = useNavigate();
  const { signOut } = useAuth();
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-[3000] backdrop-blur-sm border-b border-gray-400/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <p className="font-bold text-lg sm:text-xl">
            <span className="text-sky-800">Property Finder</span>
          </p>

          <nav className="hidden lg:flex items-center space-x-1">
            {navs.map((nav) => {
              const isActive =
                pathname === nav.link
                  ? true
                  : pathname === nav.link
                  ? true
                  : pathname.includes(nav.link + "/");

              return (
                <a
                  key={nav.id}
                  href={nav.href}
                  className={`relative rounded-xl px-4 xl:px-6 py-3 hover:bg-sky-100 hover:text-sky-600 font-medium text-sm tracking-wide transition-all duration-300 group
                  ${isActive ? "bg-sky-100 text-sky-600" : "bg-white"}`}
                >
                  {nav.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to={"/sign-in"}
              onClick={() => {
                handleSignOut(signOut, navigate);
              }}
              className="border-sky-500 hover:border-sky-400 transition-all border-[1.5px] text-sm bg-sky-600 hover:bg-sky-500 text-white px-5 xl:px-7 py-3 rounded-lg font-medium"
            >
              Sign Out
            </Link>
          </div>

          <button
            onClick={() => {
              setShowNavs((showNav) => !showNav);
            }}
            className="p-2 lg:hidden text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            {showNavs ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
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

        {showNavs && (
          <div className="lg:hidden border-t border-gray-200">
            <nav className="py-4 space-y-2">
              {navs.map((nav) => {
                const isActive =
                  pathname === nav.link
                    ? true
                    : pathname === nav.link
                    ? true
                    : pathname.includes(nav.link + "/");

                return (
                  <a
                    key={nav.id}
                    href={nav.href}
                    className={`block font-medium text-base px-4 py-3 rounded-lg transition-colors duration-200
                    ${
                      isActive
                        ? "bg-sky-100 text-sky-600"
                        : "text-gray-800 hover:bg-gray-100"
                    }`}
                    onClick={() => setShowNavs(false)}
                  >
                    {nav.name}
                  </a>
                );
              })}
              <Link
                to={"/sign-in"}
                onClick={() => {
                  handleSignOut(signOut, navigate);
                  setShowNavs(false);
                }}
                className="block font-medium text-base px-4 py-3 text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors duration-200 text-center"
              >
                Sign Out
              </Link>
            </nav>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </header>
  );
}

export default Header;
