import { CND_URL } from "../utils/constants";

const RestaurantCard = (prop) => {
  const { resData } = prop;

  const { name, avgRating, cloudinaryImageId, costForTwo } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-card-img"
        alt="res-card-img"
        src={CND_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;
