import { useEffect, useState } from "react";
import BackButton from "../componenets/BackButton";
import JokeBox from "../componenets/JokeBox";
import useApiCaller from "../hooks/ApiCaller";
import useUserStore from "../stores/UserStore";

const JokesPage = () => {
  const [jokes, setJokes] = useState({
    joke1: undefined,
    joke2: undefined,
  });
  const { user, userTechList } = useUserStore();
  const { call } = useApiCaller();

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

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await call(
          "/get-jokes",
          "post",
          {
            username: user,
          },
          "Fetching your jokes..."
        );

        setJokes({
          joke1: response[0]?.joke1,
          joke2: response[0]?.joke2,
        });
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchJokes();
  }, []);

  const getLine = () => {
    return funnyJokesLines[Math.floor(Math.random() * funnyJokesLines.length)];
  };

  return (
    <div>
      <BackButton />
      {jokes.joke1 !== undefined && jokes.joke2 !== undefined && (
        <div className="flex flex-col justify-center items-center h-[70vh] gap-12">
          <span className="text-xl md:text-3xl">{getLine()}</span>
          <div className="flex flex-col gap-3 md:flex-row">
            <JokeBox joke={jokes.joke1} />
            <JokeBox joke={jokes.joke2} />
          </div>
        </div>
      )}
    </div>
  );
};

export default JokesPage;
