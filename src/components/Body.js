import ResturanentCard from "./ResturentCrad";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  // fetching data from swiggy api
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // option chaining
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering using ternary operater
  return listOfRestaurant.length === 0 ? (
    <div className="container">
      <div className="shimmer-wrapper">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    </div>
  ) : (
    <div className="body">
      <div className="container">
        <div className="shorting-wrap">
          <div className="filter-btn">
            <button
              className="btn"
              onClick={() => {
                const filterRes = listOfRestaurant.filter((list) => {
                  return list.info.avgRating > 4;
                });
                setFilteredRestaurant(filterRes);
              }}
            >
              Top Restaurant
            </button>
          </div>
          <div className="search-box">
            <input
              type="search"
              className="search"
              value={searchText}
              placeholder="Search Here"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                // filter the resturant card and update the UI
                const filteredResturants = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filteredResturants);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="resturant">
        <div className="container">
          <div className="res-card">
            {filteredRestaurant.map((restaurant) => {
              return (
                <Link
                  key={restaurant.info.id}
                  to={"/restaurantMenu/" + restaurant.info.id}>
                  <ResturanentCard resData={restaurant} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
