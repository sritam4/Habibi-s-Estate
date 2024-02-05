import { useState, useEffect } from "react";
import AdComponent from "../Components/AdComponent";
import DetailsCoverPhoto from "../Components/DetailsCoverPhoto";
import DetailsInfo from "../Components/DetailsInfo";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import DetailsShimmer from "../Components/DetailsShimmer";

const Details = () => {
  const [searchParams] = useSearchParams();
  const externalId = searchParams.get("Property");
  const [propertyDetails, setPropertyDetails] = useState([]);

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/detail",
    params: {
      externalID: externalId,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_Api_Key,
      "X-RapidAPI-Host": process.env.REACT_APP_HOST,
    },
  };

  const getPropertyDetails = async () => {
    try {
      const response = await axios.request(options);
      setPropertyDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPropertyDetails();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [externalId]);

  if (propertyDetails.length === 0) return <DetailsShimmer />;
  return (
    <div className="w-full p-2">
      <DetailsCoverPhoto photos={propertyDetails?.photos} />
      <div className="flex justify-center">
        <DetailsInfo details={propertyDetails} />
        <AdComponent />
      </div>
    </div>
  );
};

export default Details;
