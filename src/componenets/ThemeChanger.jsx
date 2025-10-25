import { useState } from "react";

const ThemeChanger = () => {
  const [islight, setIslight] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIslight(!islight);
  };

  return (
    <div className="cursor-pointer text-xs" onClick={() => toggleTheme()}>
      {!islight && <div className="flex flex-col justify-center">🌝</div>}
      {islight && <div className="flex flex-col justify-center">🌚</div>}
    </div>
  );
};

export default ThemeChanger;
