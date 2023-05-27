import { Player, Controls } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/private_files/lf30_lmbx9g9y.json"
        className="w-full h-[60vh]"
      ></Player>
      <h2 className="font-bold text-2xl md:text-5xl animate-pulse">
        Page not found
      </h2>
    </div>
  );
};

export default ErrorPage;
