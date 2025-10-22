import { useState } from "react";

const ThemeChanger = () => {
  const [islight, setIslight] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIslight(!islight);
  };

  return (
    <div className="cursor-pointer" onClick={() => toggleTheme()}>
      {!islight && (
        <div className="flex flex-col justify-center text-2xl">🌝</div>
      )}
      {islight && (
        <div className="flex flex-col justify-center text-2xl">🌚</div>
      )}
    </div>
  );
};

export default ThemeChanger;
