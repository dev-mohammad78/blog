import { useState } from "react";
import { FaBloggerB } from "react-icons/fa6";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "صفحه اصلی", path: "/" },
    { title: "مقالات", path: "/blogs" },
    { title: "نویسندگان", path: "/authors" },
    { title: "درباره ما", path: "/about" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="bg-[var(--primary)] lg:rounded-b-lg
      font-bold text-xl"
    >
      <div className="flex items-center justify-between p-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="bg-[var(--text-white)] p-1 text-xl rounded-md">
            <FaBloggerB className="text-[var(--primary-hover)]" />
          </span>

          <h1 className="text-[var(--text-white)]">وبلاگ برنامه نویسی</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-base">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--text-white)]"
                    : "text-[var(--primary-light)] hover:text-[var(--text-white)]"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-[var(--text-white)] p-1"
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          >
            {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-[var(--border-color)] px-3 pb-3">
          <div className="flex flex-col pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base transition-colors duration-200 ${isActive ? "bg-[var(--primary-light)] text-[var(--text-white)]" : "text-[var(--primary-light)]"}`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
