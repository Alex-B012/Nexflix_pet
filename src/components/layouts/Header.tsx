import { Link } from "react-router-dom";
import { PROFILE } from "../../data/data";
import { useTheme } from "../../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full h-17.5 bg-black flex justify-between">
      <Link
        to={"/"}
        className="p-4 text-center text-3xl text-red-600 font-bold uppercase text-shadow-sm scale-y-150"
      >
        {PROFILE.brand_name}
      </Link>
      <button onClick={toggleTheme} className="mr-4 cursor-pointer text-white">
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
};

export default Header;
