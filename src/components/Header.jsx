import { FaBloggerB } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div
      className="bg-[var(--primary)] lg:rounded-b-lg flex items-center justify-between
     p-3 font-bold text-xl"
    >

      <div className="flex items-center gap-3">
        <span className="bg-[var(--text-white)] p-1 text-xl rounded-md">
          <FaBloggerB className="text-[var(--primary-hover)]" />
        </span>
        <h1 className="text-[var(--text-white)]">وبلاگ برنامه نویسی</h1>
      </div>
      <ThemeToggle />
      
    </div>
  );
}

export default Header;
