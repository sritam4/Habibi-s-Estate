import { FaArrowRightLong } from "react-icons/fa6";

const HomeExploreCards = () => {
  const cardData = [
    {
      id: 1,
      imgUrl:
        "https://media.istockphoto.com/id/1409298953/photo/real-estate-agents-shake-hands-after-the-signing-of-the-contract-agreement-is-complete.jpg?s=612x612&w=0&k=20&c=SFybbpGMB0wIoI0tJotFqptzAYK_mICVITNdQIXqnyc=",
      buttonText: "Explore Rent",
    },
    {
      id: 2,
      imgUrl:
        "https://t3.ftcdn.net/jpg/05/37/92/72/240_F_537927240_ifCoafDmcK3ZZtG5NJv7VsO9rN3cYaok.jpg",
      buttonText: "Explore Buy",
    },
    {
      id: 3,
      imgUrl:
        "https://raleighrealtyhomes.com/storage/blogs/September2023/oAp5uiQIEXjlJLL7uBQx.webp",
      buttonText: "Explore Agents",
    },
  ];

  const Card = ({ imgUrl, buttonText }) => (
    <div className="w-1/3 relative ">
      <img
        className="h-full w-full rounded-2xl"
        src={imgUrl}
        alt="card cover"
      />
      <p className="absolute bottom-2 bg-[rgb(0,0,0,0.7)] text-white px-4 h-7 flex gap-2 items-center border hover:bg-black">
        {buttonText}
        <FaArrowRightLong />
      </p>
    </div>
  );

  return (
    <div className="flex w-11/12 mx-auto mb-10 h-72 gap-5 justify-around ">
      {cardData.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </div>
  );
};

export default HomeExploreCards;
