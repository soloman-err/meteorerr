import BannerSlider from "../../components/BannerSlider/BannerSlider";
import HeadLineSlider from "../../components/HeadLineSlider/HeadLineSlider";
import Footer from "../../components/Shared/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
