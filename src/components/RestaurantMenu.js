import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
const {resId} = useParams()
const resInfo = useRestaurantMenu(resId)
const [showItems,setShowItems]=useState(true)
const [showIndex,setShowIndex]=useState(0)
if (resInfo === null) return <Shimmer/>

const {name,costForTwoMessage,cuisines,avgRating} = resInfo?.cards[2]?.card?.card?.info


const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards
// console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(category=>category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
// console.log(categories);


return (<div className="text-center">
    <h1 className="font-bold text-2xl my-3">
  {name}
    </h1>
    <p className="font-bold">{cuisines.join(', ')}</p>
   {categories.map((category,index)=><RestaurantCategory  showItems={index===showIndex?true:false} setShowIndex={()=>{
    setShowIndex(index)
   
   }} key={category?.card?.card?.title} data={category?.card?.card} />) }
     </div>)
};
export default RestaurantMenu;
