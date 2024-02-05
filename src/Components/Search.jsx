import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSuggestions } from "../Utils/searchSlice";

const Search = ({ purpose }) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [externalId, setExternalId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cachedSuggestions = useSelector((store) => store.search);

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/auto-complete",
    params: {
      query: searchQuery,
      hitsPerPage: "10",
      page: "0",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "51fa9e5c30mshd506b0fd562b384p13eab5jsn2103c7d40778",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  const getSearchSuggestion = async () => {
    try {
      const response = await axios.request(options);
      setSearchSuggestions(response.data?.hits);
      if (searchQuery) {
        dispatch(
          addSuggestions({
            [searchQuery]: response.data?.hits,
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    searchSuggestions &&
      navigate(
        `/list?purpose=${purpose}&loc=${
          externalId ? externalId : searchSuggestions[0]?.externalID
        }`
      );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSuggestions[searchQuery]) {
        setSearchSuggestions(cachedSuggestions[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 600);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  return (
    <>
      <div className=" relative">
        <input
          className="border text-base w-96 p-1 px-4 rounded-lg text-gray-700"
          type="text"
          placeholder="City, flats, appartments"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() =>
            setTimeout(() => {
              setShowSuggestion(false);
            }, 300)
          }
        />

        {showSuggestion && (
          <div className="w-96 absolute top-0 z-10 right-full bg-[rgba(255,255,255,0.9)] rounded-lg">
            {searchSuggestions?.map((item) => {
              return (
                <p
                  key={item?.id}
                  onClick={() => {
                    setSearchQuery(item?.name);
                    setExternalId(item?.externalID);
                    setShowSuggestion(false);
                  }}
                  className="px-4 py-2 font-semibold border"
                >
                  {item?.name}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <button
        onClick={() => handleSearch()}
        className="flex items-center gap-1 text-slate-200 font-semibold text-lg bg-[rgb(255,255,255,0.04)] rounded-lg p-1 mx-3 hover:bg-gray-600"
      >
        <IoSearchSharp className="text-xl" />
        Search
      </button>
    </>
  );
};

export default Search;
