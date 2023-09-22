import ResturanentCard from "./ResturentCrad";
import { useState } from "react";
import ResList from "../../utils/apiData";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState(ResList);
  return (
    <div className="body">
      <div className="container">
        <div className="filter-btn">
          <button
            className="btn"
            onClick={() => {
              const filterRes = listOfRestaurant.filter((list) => {
                return list.info.avgRating > 4;
              });
              setListOfRestaurant(filterRes);
            }}
          >
            Top Restaurant
          </button>
        </div>
      </div>
      <div className="resturant">
        <div className="container">
          <div className="res-card">
            {listOfRestaurant.map((restaurant) => {
              return (
                <ResturanentCard
                  key={restaurant.info.id}
                  resData={restaurant}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
