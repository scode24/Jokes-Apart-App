import { SHA256 } from "crypto-js";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterOptions from "./componenets/FooterOptions";
import useApiCaller from "./hooks/ApiCaller";
import useUserStore from "./stores/UserStore";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { call } = useApiCaller();
  const navigate = useNavigate();
  const { setUser } = useUserStore();

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

  const memoGetJokes = useMemo(() => {
    const len = StartingJokes.length;
    return StartingJokes[Math.floor(Math.random() * len)];
  }, []);

  const handleInput = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData(formData);
  };

  const getHash = (password) => {
    return SHA256(password).toString();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const button = e.nativeEvent.submitter;

    if (button.name === "register") {
      try {
        const response = await call(
          "/register-user",
          "post",
          {
            username: formData.username.trim(),
            password: getHash(formData.password),
          },
          "Proceeding with user"
        );

        if (response.status === "user present") {
          alert("Username is already present. Provide a different username.");
          return;
        }

        alert(
          "Registration completed successfully. Proceed to log in to access your account."
        );
      } catch (error) {
        console.error("Error", error);
      }
    } else if (button.name === "login") {
      try {
        const response = await call(
          "/login-user",
          "post",
          {
            username: formData.username.trim(),
            password: getHash(formData.password),
          },
          "Proceeding with user"
        );

        if (response.status === "login failed") {
          alert("Login failed. Please re-validate credentials and try again.");
          return;
        }

        setUser(formData.username);
        navigate("/main");
      } catch (error) {
        console.error("Error", error);
      }
    }
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
          {memoGetJokes}
        </span>

        <form
          className="flex flex-col mt-7 dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="flex flex-col gap-3 p-3 dark:border-zinc-800">
            <input
              className="px-3 py-2 text-center rounded-md bg-zinc-100 dark:bg-zinc-950 dark:border-zinc-800"
              type="text"
              placeholder="Enter Username"
              max={10}
              required
              name="username"
              onChange={(e) => handleInput(e)}
            />

            <input
              className="px-3 py-2 text-center rounded-md bg-zinc-100 dark:bg-zinc-950 dark:border-zinc-800"
              type="password"
              placeholder="Enter Password"
              required
              name="password"
              onChange={(e) => handleInput(e)}
            />
          </div>

          <div className="flex flex-col justify-center gap-3 p-3">
            <motion.button
              className="flex flex-col justify-center rounded-md border px-3 py-2 text-sm dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              name="login"
              type="submit"
            >
              Login
            </motion.button>

            <motion.button
              className="flex flex-col justify-center rounded-md border px-3 py-2 text-sm dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              name="register"
              type="submit"
            >
              Register
            </motion.button>
          </div>
        </form>
      </div>

      <FooterOptions />
    </>
  );
}

export default App;
