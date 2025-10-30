import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import FooterOptions from "../componenets/FooterOptions";
import Header from "../componenets/Header";
import useApiCaller from "../hooks/ApiCaller";
import useLoaderDataStore from "../stores/LoaderDataStore";
import useUserStore from "../stores/UserStore";
import LoadingPage from "./LoadingPage";

const MainPage = () => {
  const navigate = useNavigate();
  const { user, setUserTechList } = useUserStore();
  const { call } = useApiCaller();
  const { message } = useLoaderDataStore();

  const getUserTechList = async () => {
    try {
      const response = await call(
        "/get-user-tech-list",
        "get",
        { username: user },
        "Fetching user tech preferences"
      );
      setUserTechList(response["techlist"]);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    if (user === null || user === undefined) {
      navigate("/");
      return;
    }
    getUserTechList();
    navigate("/main/menu");
  }, [user]);

  return (
    <>
      <div
        className="flex flex-col dark:bg-zinc-900 h-screen dark:text-zinc-200 dark:border-zinc-800"
        style={{
          filter: message !== undefined ? "blur(3px)" : "",
        }}
      >
        <Header />
        <div className="p-7 h-[calc(100vh-72px)]">
          <Outlet />
        </div>
      </div>

      <LoadingPage />
      <FooterOptions />
    </>
  );
};

export default MainPage;
