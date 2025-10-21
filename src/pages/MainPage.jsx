import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../componenets/Header";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/main/menu");
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <div className="p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
