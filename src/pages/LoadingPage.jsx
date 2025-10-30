import LoadingBox from "../componenets/LoadingBox";
import useLoaderDataStore from "../stores/LoaderDataStore";

const LoadingPage = () => {
  const { message } = useLoaderDataStore();

  return (
    message !== undefined && (
      <div className="absolute top-0 left-0 z-10 flex flex-col justify-center items-center h-screen w-screen">
        <LoadingBox />
      </div>
    )
  );
};

export default LoadingPage;
