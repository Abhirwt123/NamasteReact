import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Offer from "./Offer";
import MenuList from "./MenuList";
import { MENU_ID } from "../../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  useEffect(() => {
    fetchResInfo();
  }, []);
  const [resInfo, setResInfo] = useState(null);
  const fetchResInfo = async () => {
    const data = await fetch(MENU_ID + resId);

    const json = await data.json();
    setResInfo(json.data);
    // console.log(resInfo);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  const {
    name,
    cuisines,
    sla,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo.cards[0]?.card?.card.info;
  const { offers } = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const { itemCards } =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards
  );
  return (
    <div className="res-menu-wrap">
      <div className=" sm-container">
        <div className="wrap">
          <div className="res-info">
            <div className="right-sec">
              <p className="name">{name}</p>
              <p className="cuisines">{cuisines.join(",")}</p>
              <p className="add-info">
                {areaName},{sla.lastMileTravelString}
              </p>
            </div>
            <div className="left-sec">
              <div className="box">
                <p className="rating">
                  <i className="fa-solid fa-star"></i>
                  {avgRating}
                </p>
                <p className="out-of">{totalRatingsString}</p>
              </div>
            </div>
          </div>
          <div className="discount-box">
            <div className="details">
              <p>
                <i className="fa-solid fa-clock"></i>
                {sla.deliveryTime + " "}min
              </p>
              <p>{costForTwoMessage}</p>
            </div>
            <div className="discount-card">
              {offers.map((item, index) => {
                return <Offer key={index} data={item} />;
              })}
            </div>
          </div>
          <div className="menu-list-box">
            <h4 className="title">Menu</h4>
            <div className="cards-wrap">
              {itemCards.map((list, index) => {
                return <MenuList key={index} menuInfo={list} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
