import { useContext } from "react";
import { CLOUD_CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // const { resName, cusinie, star, locality, areaName, img } = props;
  const { resData} = props;
  
const {loggedInUser}=useContext(UserContext)
  return (
    <div data-testid="resCard" className="bg-amber-100 w-[200] m-4 p-3 rounded-e-md hover:bg-orange-200"  >
      {/* cloudinaryImageId cdn */}
      <img  className="rounded-md" src={CLOUD_CDN_URL + resData.info.cloudinaryImageId} alt="No image" />   
      <h4 className="text-lg font-bold  pb-2">{resData.info.name}</h4>
      <h5>{resData.info.cuisines.join(", ")}</h5>
      <h5>{`${resData.info.avgRating} stars`}</h5>
      <h5>
        {resData.info.locality} {resData.info.areaName}
      </h5>
      <h5>{loggedInUser}</h5>
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div >
        <label className="absolute border text-white bg-black border-black rounded-md text-md">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
    }
    
export default RestaurantCard;
