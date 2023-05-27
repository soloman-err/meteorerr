import BannerSlider from "../../components/BannerSlider/BannerSlider";
import TypedText from "../../components/TypedText/TypedText";

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <div className="destroyed-down h-40 shadow-xl">.</div>
      <TypedText />
    </div>
  );
};

export default Home;
