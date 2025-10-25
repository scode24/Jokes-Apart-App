import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row gap-3 cursor-pointer"
      onClick={() => navigate("/main/menu")}
    >
      <div className="flex flex-col justify-center">←</div>
      <span className="flex flex-col justify-center">Back to main menu</span>
    </div>
  );
};

export default BackButton;
