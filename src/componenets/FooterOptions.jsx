import ThemeChanger from "./ThemeChanger";

const FooterOptions = () => {
  return (
    <div className="flex flex-row absolute bottom-7 right-7 gap-3 dark:text-zinc-200">
      <button
        className="flex flex-row gap-3 border rounded-md px-3 text-xs dark:border-zinc-800"
        onClick={() => window.open(process.env.REACT_APP_GITHUB_REPO_LINK)}
      >
        <span className="flex flex-col justify-center">🧑🏽‍💻</span>
        <span className="flex flex-col justify-center">Github</span>
      </button>

      <button className="flex flex-row gap-3 border rounded-md px-3 text-xs dark:border-zinc-800">
        <div className="flex flex-col justify-center">
          <ThemeChanger />
        </div>
        <span className="flex flex-col justify-center">Toggle Theme</span>
      </button>
    </div>
  );
};

export default FooterOptions;
