import { motion } from "motion/react";

const TechBox = ({ index, name, tag, icon, isSelected, onclickfn }) => {
  return (
    <motion.div
      className="flex flex-col justify-between rounded-md border shadow-sm cursor-pointer w-full md:h-[150px] dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-800"
      style={isSelected ? { borderColor: "yellowgreen" } : {}}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onclickfn(index, tag)}
    >
      {isSelected && <div className="p-3 px-5 text-3xl">{icon || "🪲"}</div>}
      {!isSelected && <div className="p-3 px-5 text-3xl">{icon || "🐞"}</div>}
      <div className="flex flex-col">
        <span
          className="flex flex-row justify-end p-3 px-5 text-right font-thin md:text-xl"
          style={isSelected ? { fontWeight: "bold" } : {}}
        >
          {name}
        </span>
        <div
          className="h-[5px] rounded-b-md"
          style={isSelected ? { backgroundColor: "yellowgreen" } : {}}
        ></div>
      </div>
    </motion.div>
  );
};

export default TechBox;
