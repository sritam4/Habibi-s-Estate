import HomeBanner1 from "../Components/HomeBanner1";
import HomeBanner2 from "../Components/HomeBanner2";
import HomeCardContainer from "../Components/HomeCardContainer";
import HomeExploreCards from "../Components/HomeExploreCards";

const Home = () => {
  return (
    <div className="">
      <HomeBanner1 />
      <h2 className="m-auto w-11/12 mt-8 mb-4 font-bold text-2xl text-gray-600">
        Explore Home, Apartments and Villas
      </h2>
      <HomeExploreCards />
      <HomeBanner2 />
      <HomeCardContainer />
    </div>
  );
};

export default Home;
