import { useEffect, useState } from "react";
import { data } from "../Utils/Demo";
import DetailsCard from "../Components/DetailsCard";
import Filter from "../Components/Filter";
import axios from "axios";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ListShimmer from "../Components/ListShimmer";
import AdComponent from "../Components/AdComponent";

const List = () => {
  const [propertiesList, setPropertiesList] = useState([]);
  const API_KEY = process.env.REACT_APP_Api_Key;
  const HOST = process.env.REACT_APP_HOST;

  const [searchParams] = useSearchParams();
  const locationId = searchParams.get("loc");
  const purpose = searchParams.get("purpose");

  const filterObject = useSelector((store) => store.filter.filterOptions);
  const { category, price, beds, baths, sort } = filterObject;

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: locationId,
      purpose: purpose,
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: sort,
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
      // const response = await axios.request(options);
      // setPropertiesList(response.data?.hits);
      // console.log(response.data);
      setPropertiesList(data?.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPropertiesList();

    return () => {
      setPropertiesList([]);
    };
    // eslint-disable-next-line
  }, [filterObject, locationId, purpose]);

  if (propertiesList?.length === 0) {
    console.log(propertiesList.length);
    return <ListShimmer />;
  }
  return (
    <div className="w-full">
      <Filter />
      <div className="w-full flex ">
        <div className="xl:w-8/12 p-2">
          {propertiesList?.map((item) => {
            return <DetailsCard key={item?.id} {...item} />;
          })}
        </div>
        <AdComponent />
      </div>
    </div>
  );
};

export default List;
