const JokeBox = ({ joke }) => {
  return (
    <div className="flex flex-col justify-between rounded-md border shadow-sm p-3 w-full md:w-[300px] md:h-[350px] bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col justify-center items-center text-2xl md:text-5xl md:h-[70px]">
        🤭
      </div>
      <div className="text-center p-5 overflow-auto h-fit font-thin md:h-[80%]">
        <span>{joke}</span>
      </div>
    </div>
  );
};

export default JokeBox;
