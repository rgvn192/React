import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaraunts, setListOfRestaraunts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95419&lng=75.78424&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaraunts(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setLoading(false);
  };

  return (
    <div className="body">
      <div className="filter-search-container">
        <div>
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredData = listOfRestaraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestaraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {loading
          ? // Render shimmer placeholders while loading
            Array(8)
              .fill(0)
              .map((_, index) => (
                <div className="res-card shimmer-card" key={index}>
                  <div className="shimmer"></div>
                  <div className="shimmer"></div>
                </div>
              ))
          : filteredListOfRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
      </div>
    </div>
  );
};

export default Body;
