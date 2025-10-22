const JokeBox = ({ joke }) => {
  return (
    <div className="flex flex-col justify-between rounded-md border shadow-sm p-3 w-full md:w-[300px]">
      <div className="flex flex-col justify-center items-center text-5xl h-[70px]">
        🤭
      </div>
      <div className="text-center p-7">
        <span>{joke}</span>
      </div>
    </div>
  );
};

export default JokeBox;
