import { useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import useLocalStorage from "../hooks/useLocalStorage";

function ThemeToggle() {
  const [isDark, setIsDark] = useLocalStorage("theme", false);

  const themeHandler = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={themeHandler}
      aria-label={isDark ? "فعال کردن حالت روشن" : "فعال کردن حالت تاریک"}
      className="flex h-8 w-12 items-center justify-center rounded-full bg-white/15 text-[var(--text-white)] transition-colors hover:bg-white/25"
    >
      {isDark ? (
        <MdLightMode className="text-xl" />
      ) : (
        <MdDarkMode className="text-xl" />
      )}
    </button>
  );
}

export default ThemeToggle;
