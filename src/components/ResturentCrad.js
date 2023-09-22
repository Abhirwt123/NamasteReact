import { CARD_IMG_URL } from "../../utils/constant";
const ResturanentCard = (props) => {
  const { resData } = props;
  return (
    <div className="card-item">
      <div className="food-img">
        <img
          src={CARD_IMG_URL + resData.info.cloudinaryImageId}
          alt="food image"
        />
      </div>
      <div className="food-info">
        <h4 className="res-name">{resData.info.name}</h4>
        <h5 className="rating">{resData.info.avgRating}</h5>
        <div className="dish-name-box">
          <p className="name">{resData.info.cuisines.slice(0, 3).join(",")}</p>
          <p className="rate">{resData.info.costForTwo} </p>
        </div>
        <p className="time">{resData.info.sla.slaString}</p>
      </div>
    </div>
  );
};
export default ResturanentCard;
