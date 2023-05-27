import BannerSlider from "../../components/BannerSlider/BannerSlider";
import HeadLineSlider from "../../components/HeadLineSlider/HeadLineSlider";
import TypedText from "../../components/TypedText/TypedText";
import Shop from "./Shop/Shop";

const Home = () => {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <div className="destroyed-down h-40 shadow-xl">.</div>
      <TypedText />
      <HeadLineSlider />
      <Shop></Shop>
    </div>
  );
};

export default Home;
