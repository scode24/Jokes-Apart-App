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
        <JokeBox
          joke={
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          }
        />
        <JokeBox joke={"some joke"} />
      </div>
    </div>
  );
};

export default JokesPage;
