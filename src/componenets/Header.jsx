import { useNavigate } from "react-router-dom";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between p-5 border-b sticky z-10 top-0 bg-white dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800">
      <div
        className="flex flex-row gap-2 cursor-pointer"
        onClick={() => navigate("/main/menu")}
      >
        <div className="flex flex-col justify-center text-2xl border-r px-3">
          🤪
        </div>
        <div className="flex flex-col justify-center">Jokes Apart</div>
      </div>

      <div className="flex flex-row gap-3">
        <button className="flex flex-col justify-center rounded-md border px-3 text-sm dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800">
          GitHub
        </button>

        <ThemeChanger />
      </div>
    </div>
  );
};

export default Header;
