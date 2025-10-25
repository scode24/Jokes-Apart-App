import { useNavigate } from "react-router-dom";
import TechBox from "../componenets/TechBox";
import useUserStore from "../stores/UserStore";

const MenuPage = () => {
  const navigate = useNavigate();
  const { user } = useUserStore();

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
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col items-center gap-3">
        <span className="text-green-500">Welcome! {user}</span>
        <span className="text-xl md:text-3xl">Select An Option</span>
      </div>

      <div className="flex flex-col mt-10 gap-3 md:flex-row">
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
