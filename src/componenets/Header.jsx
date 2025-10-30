import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/UserStore";

const Header = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null || user === undefined) {
      navigate("/");
      return;
    }
  }, [user]);

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
        <div className="flex flex-row gap-3">
          <div className="flex flex-col justify-center border-r px-3 text-[#89AB00] dark:border-zinc-800">
            <strong>{user}</strong>
          </div>

          <div
            className="flex flex-col justify-center cursor-pointer"
            onClick={() => setUser(undefined)}
          >
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
