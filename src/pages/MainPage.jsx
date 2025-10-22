import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../componenets/Header";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/main/menu");
  }, []);

  return (
    <div className="flex flex-col dark:bg-zinc-900 h-screen dark:text-zinc-200 dark:border-zinc-800">
      <Header />
      <div className="p-7 h-[calc(100vh-72px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
