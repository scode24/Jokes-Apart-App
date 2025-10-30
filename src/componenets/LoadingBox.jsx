import { motion } from "motion/react";
import useLoaderDataStore from "../stores/LoaderDataStore";

const LoadingBox = () => {
  const { message } = useLoaderDataStore();

  return (
    <motion.div
      className="flex flex-col justify-between rounded-md border border-[#89AB00] shadow-xl p-3 w-full md:w-[300px] bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <div className="flex flex-col justify-center items-center text-2xl h-[70px] md:text-5xl ">
        🤔
      </div>
      <div className="text-center p-5 font-thin">
        <span>{message}</span>
      </div>
    </motion.div>
  );
};

export default LoadingBox;
