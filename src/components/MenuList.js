import { FOOD_IMG_URL } from "../../utils/constant";
const MenuList = (props) => {
  const { menuInfo } = props;
  return (
    <div className="card">
      <div className="item-info">
        <p className="name">{menuInfo.card.info.name}</p>
        <p className="rate">&#8377;{menuInfo.card.info.price / 100}</p>
        <p className="food-info">{menuInfo.card.info.description}</p>
      </div>
      <div className="item-img">
        <img src={FOOD_IMG_URL + menuInfo.card.info.imageId} />
      </div>
    </div>
  );
};
export default MenuList;
