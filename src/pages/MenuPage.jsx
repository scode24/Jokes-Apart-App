import { useNavigate } from "react-router-dom";
import TechBox from "../componenets/TechBox";

const MenuPage = () => {
  const navigate = useNavigate();

  const onClickHandle = (index, tag) => {
    switch (tag) {
      case "select-tech":
        navigate("/main/select");
        break;
      case "jokes-for-you":
        navigate("/main/jokes");
        break;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <div className="flex flex-col items-center gap-3">
        <span className="text-green-500">Welcome! Soumyabrata</span>
        <span className="text-xl md:text-3xl">Select An Option</span>
      </div>

      <div className="flex flex-row mt-10 gap-3">
        <TechBox
          name="Select Technology"
          tag="select-tech"
          icon="🧑🏽‍💻"
          onclickfn={onClickHandle}
        />
        <TechBox
          name="Jokes For You"
          tag="jokes-for-you"
          icon="🤪"
          onclickfn={onClickHandle}
        />
      </div>
    </div>
  );
};

export default MenuPage;
