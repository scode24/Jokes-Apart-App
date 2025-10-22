import JokeBox from "../componenets/JokeBox";

const JokesPage = () => {
  const funnyJokesLines = [
    "Freshly brewed jokes, just for you ☕😂",
    "Warning: Jokes incoming! Handle with laughter.",
    "Certified giggles — tailor-made for you!",
    "Jokes for you… because someone had to laugh today.",
    "Comedy delivery service: one laugh at a time.",
    "I brought jokes. You bring the laugh.",
    "Jokes for you, straight from my giggle factory 🎭",
    "Knock knock — it’s me, bringing jokes again 😜",
  ];

  const getLine = () => {
    return funnyJokesLines[Math.floor(Math.random() * funnyJokesLines.length)];
  };

  return (
    <div className="flex flex-col justify-center items-center h-[70vh] gap-12">
      <span className="text-xl md:text-3xl">{getLine()}</span>
      <div className="flex flex-col gap-3 md:flex-row">
        <JokeBox joke={"some joke"} />
        <JokeBox joke={"some joke"} />
      </div>
    </div>
  );
};

export default JokesPage;
