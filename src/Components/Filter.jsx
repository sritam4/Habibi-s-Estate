import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterSlice } from "../Utils/filterSlice";

const Filter = () => {
  const [filterCategory, setFilterCategory] = useState(
    useSelector((store) => store.filter.filterOptions.category)
  );
  const [filterPrice, setFilterPrice] = useState(
    useSelector((store) => store.filter.filterOptions.price)
  );
  const [filterBeds, setFilterBeds] = useState(
    useSelector((store) => store.filter.filterOptions.beds)
  );
  const [filterBaths, setFilterBaths] = useState(
    useSelector((store) => store.filter.filterOptions.baths)
  );
  const [filterSort, setFilterSort] = useState(
    useSelector((store) => store.filter.filterOptions.sort)
  );

  const dispatch = useDispatch();
  // const filterdata = useSelector((store) => store.filter.filterOptions);
  // const { category, price, beds, baths, sort } = filterdata;

  const handleClickFilter = () => {
    dispatch(
      updateFilterSlice({
        category: filterCategory,
        price: filterPrice,
        beds: filterBeds,
        baths: filterBaths,
        sort: filterSort,
      })
    );
  };

  return (
    <div className="w-full py-2 shadow-lg bg-slate-100">
      <ul className="flex flex-wrap lg:w-10/12 m-auto justify-around text-lg text-gray-600 select-none">
        <li className="p-2 mx-2 whitespace-nowrap">
          Category :
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="4">Apartment</option>
            <option value="3">Villas</option>
            <option value="6">Shop</option>
            <option value="24">Showroom</option>
            <option value="21">Hotel Apartments</option>
            <option value="14">Residencial Plot</option>
            <option value="16">Townhouses</option>
          </select>
        </li>

        <li className="p-2 mx-2 flex items-center whitespace-nowrap">
          Price:
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
          >
            <option value="">select</option>
            <option value="10000">min 10,000</option>
            <option value="20000">min 20,000</option>
            <option value="40000">min 40,000</option>
            <option value="60000">min 60,000</option>
            <option value="80000">min 80,000</option>
            <option value="100000">min 100,000</option>
            <option value="150000">min 150,000</option>
            <option value="200000">min 200,000</option>
            <option value="300000">min 300,000</option>
            <option value="500000">min 500,000</option>
            <option value="700000">min 700,000</option>
            <option value="1000000">min 1,000,000</option>
          </select>
        </li>
        <li className="p-2 mx-2 flex whitespace-nowrap">
          Beds:
          <select
            value={filterBeds}
            onChange={(e) => setFilterBeds(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </li>

        <li className="p-2 mx-2 flex whitespace-nowrap">
          Baths:
          <select
            value={filterBaths}
            onChange={(e) => setFilterBaths(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </li>

        <li className="p-2 mx-2 flex whitespace-nowrap">
          Sort By:
          <select
            value={filterSort}
            onChange={(e) => setFilterSort(e.target.value)}
          >
            <option value="city-level-score">City Level Score</option>
            <option value="price-asc">Price low to high</option>
            <option value="price-desc">Price high to low</option>
            <option value="verified-score">Verified Score</option>
            <option value="date-desc">Date</option>
          </select>
        </li>

        <li className="p-2 mx-2 flex whitespace-nowrap">
          <button
            className="text-blue-800 border border-blue-800 px-2 rounded bg-blue-200 hover:bg-blue-500 hover:text-white"
            onClick={handleClickFilter}
          >
            Filter
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
