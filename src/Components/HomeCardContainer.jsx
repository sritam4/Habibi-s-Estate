import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import axios from "axios";

const HomeCardContainer = () => {
  const KEY = process.env.REACT_APP_Api_Key;
  const HOST = process.env.REACT_APP_HOST;
  const [propertiesList, setPropertiesList] = useState([]);

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002",
      purpose: "for-sale",
      hitsPerPage: "12",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      roomsMin: "1",
      bathsMin: "1",
    },
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  const getPropertiesList = async () => {
    try {
      const response = await axios.request(options);
      setPropertiesList(response.data?.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPropertiesList();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-4 w-11/12 m-auto">
      {propertiesList &&
        propertiesList.map((item) => {
          return <PropertyCard key={item.id} {...item} />;
        })}
    </div>
  );
};

export default HomeCardContainer;
