import { motion } from "motion/react";
import "./App.css";
import ThemeChanger from "./componenets/ThemeChanger";

function App() {
  const StartingJokes = [
    "Why did the React developer feel broke? Because they used up all their cache!",
    "Why did Node.js go to therapy? Too many unresolved promises.",
    "I told my computer I needed a break… now it won’t stop sending me KitKat ads!",
    "Why do Java developers wear glasses? Because they don’t C#.",
    "What’s a programmer’s favorite place to hang out? The Foo Bar.",
    "Why was the JavaScript developer sad? Because they didn’t Node how to Express themselves.",
    "Debugging: Being the detective in a crime movie where you are also the murderer.",
    "I asked SQL to keep my secret… but it kept dropping hints.",
    "Why did Python live on one line? Because indentation was too much pressure.",
    "Why do APIs break up? Lack of communication.",
    "Git commit –m 'fixed bug' – Translation: I have no idea why it works.",
    "Why did Kubernetes break up with Docker? It found a better container.",
    "Why didn’t the AI pass the exam? It didn’t get the prompt right.",
    "Why do CSS developers prefer dark mode? Because light attracts bugs.",
    "REST API and SOAP walk into a bar. REST orders a beer, SOAP wants the full menu.",
  ];

  const getJokes = () => {
    const len = StartingJokes.length;
    return StartingJokes[Math.floor(Math.random() * len)];
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-5 dark:bg-zinc-900 dark:text-zinc-200">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col justify-center text-3xl border-r px-3">
            🤪
          </div>
          <div className="flex flex-col justify-center text-2xl font-thin">
            Jokes Apart
          </div>
        </div>

        <span className="px-[10%] text-center text-3xl mx-auto md:text-5xl">
          {getJokes()}
        </span>

        <div className="flex flex-row rounded-md border p-3 mt-7 gap-3 dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800">
          <input
            className="dark:bg-zinc-900"
            type="text"
            placeholder="Enter Username"
          />
          <motion.button
            className="flex flex-col justify-center items-center rounded-full border w-[30px] h-[30px] dark:text-zinc-200 dark:border-zinc-800"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>→</span>
          </motion.button>
        </div>
      </div>

      <div className="absolute top-3 right-3">
        <ThemeChanger />
      </div>
    </>
  );
}

export default App;
