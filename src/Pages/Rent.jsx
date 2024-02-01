import { useEffect, useState } from "react";
// import { data } from "../Utils/Demo";
import DetailsCard from "../Components/DetailsCard";
import Filter from "../Components/Filter";
import axios from "axios";
import { useSelector } from "react-redux";

const Rent = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const API_KEY = process.env.REACT_APP_Api_Key;
  const HOST = process.env.REACT_APP_HOST;

  const filterObject = useSelector((store) => store.filter.filterOptions);
  const { category, price, beds, baths, sort } = filterObject;

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-rent",
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: sort,
      rentFrequency: "monthly",
      categoryExternalID: parseInt(category),
      priceMin: parseInt(price) ? parseInt(price) : 0,
      roomsMin: parseInt(beds),
      bathsMin: parseInt(baths),
    },
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  const getPropertiesList = async () => {
    try {
      const response = await axios.request(options);
      setPropertiesList(response.data?.hits);
      console.log(response.data);
      // setPropertiesList(data?.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPropertiesList();
    // eslint-disable-next-line
  }, [filterObject]);

  if (propertiesList?.length === 0) {
    return null;
  }
  return (
    <div className="w-full">
      <Filter />
      {propertiesList?.map((item) => {
        return <DetailsCard key={item?.id} {...item} />;
      })}
    </div>
  );
};

export default Rent;
