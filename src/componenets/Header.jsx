import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row justify-between p-5 border-b sticky z-10 top-0 bg-white"
      onClick={() => navigate("/main/menu")}
    >
      <div className="flex flex-row gap-2">
        <div className="flex flex-col justify-center text-2xl border-r px-3">
          🤪
        </div>
        <div className="flex flex-col justify-center">Jokes Apart</div>
      </div>
    </div>
  );
};

export default Header;
