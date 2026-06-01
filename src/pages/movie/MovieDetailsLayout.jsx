import { useTheme } from "../../hooks/useTheme.js";

import ScrollToTop from "../../components/ScrollToTop.jsx";
import GoBackButton from "../../components/ui/btns/GoBackButton.jsx";

const MovieDetailsLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <main
        className={`movie-details min-h-screen pb-20 bg-white text-black ${theme === "dark" && "dark:bg-black dark:text-white"}  transition-colors duration-300`}
      >
        <ScrollToTop />
        <GoBackButton />

        <div className="w-full mt-6">{children}</div>
      </main>
    </>
  );
};

export default MovieDetailsLayout;
