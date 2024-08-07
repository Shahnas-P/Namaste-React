import { CLOUD_CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resName, cusinie, star, locality, areaName, img } = props;
  const cardStyle = {
    backgroundColor: "beige",
  };
  return (
    <div className="res-card" style={cardStyle}>
      {/* cloudinaryImageId cdn */}
      <img src={CLOUD_CDN_URL + img} alt="No image" />
      <h4>{resName}</h4>
      <h5>{cusinie.join(", ")}</h5>
      <h5>{star}</h5>
      <h5>
        {locality} {areaName}
      </h5>
    </div>
  );
};
export default RestaurantCard;
