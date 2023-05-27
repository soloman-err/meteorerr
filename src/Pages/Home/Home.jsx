import HeadlineSlider from "../../components/HeadlineSlider/HeadlineSlider";
import Marquee from "../../components/HeadlineSlider/HeadlineSlider";

const Home = () => {
  return (
    <div>
      {/* <HeadlineSlider></HeadlineSlider> */}

      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full space-y-20 lg:space-y-0">
          <img
            className="bg-black p-1 w-[450px] h-[500px] lg:w-[500px] md:h-[700px] object-cover"
            src="https://images.unsplash.com/photo-1583305727488-61f82c7eae4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <img
            className=" w-[450px] h-[500px] lg:w-[500px] md:h-[700px] object-cover"
            src="https://images.unsplash.com/photo-1550985616-10810253b84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
