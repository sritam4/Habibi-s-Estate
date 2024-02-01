import SearchBox from "./SearchBox";

const HomeBanner1 = () => {
  return (
    <div className="h-[550px] w-full border my-4 relative overflow-hidden">
      <img
        className="w-full h-full"
        src="https://hooquest.com/wp-content/uploads/2021/11/facebook-cover-2.jpg"
        alt="cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-transparent to-black"></div>

      <div className="absolute top-8 bottom-8 left-1/2 right-0 flex flex-col justify-center items-center p-4 gap-3">
        <div>
          <p className="text-3xl font-bold text-white ">
            Find Yours Dream Home
          </p>
        </div>
        <SearchBox />
      </div>
    </div>
  );
};

export default HomeBanner1;
