// Import Context from react
import { useContext, useEffect, useState } from "react";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// Import UserContext
import UserContext from "../utils/UserContext";



const Body = () => {
  const [listOfRestuaurant, setlistOfRestuaurant] = useState([]);
  const [restaurantSearch, setRestaurantSearch] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus()
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  const {loggedInUser,setUserName}=useContext(UserContext)



  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    
    const json = await data.json();
   
    // console.log(json);
    
    

    //Optinal Chaining
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
        
        // console.log(restaurants);
        
    setlistOfRestuaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };




  if (onlineStatus === false)return <h1>You are look like offline !!! , Please Check your internet connection.</h1>
  //Conditional Rendering

  return listOfRestuaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div >
      <div className="flex  justify-center my-4">
        <div>
          <input
          className="bg-slate-200 rounded-sm border-solid border-slate-300"
          data-testid="searchInput"
            type="text"
            value={restaurantSearch}

            onChange={(e) => {
              setRestaurantSearch(e.target.value);
            }}
          />

          <button  className="ml-2 border border-slate-300 px-1 rounded-sm bg-slate-200"
            onClick={() => {
              const filterRestaurant = listOfRestuaurant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(restaurantSearch.toLowerCase())
              );
              setFilteredRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
         className="ml-2 px-2 border border-slate-300  rounded-sm bg-yellow-200 "
          onClick={() => {
            //Filter Logic
            const filteredData = listOfRestuaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            // console.log(filteredData);
            
            // setlistOfRestuaurant(filteredData);
            setFilteredRestaurant(filteredData);

          }}
        >
          Top-Rated
        </button>

{/* Update Context */}
        <div className="ml-2 border border-slate-300 px-1 rounded-sm bg-slate-200 ">
          <input placeholder="Write Here..." className="outline-none"  onChange={(e)=>setUserName(e.target.value) } />
        </div>

      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link  className="link" to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}> 
        {restaurant.info.isOpen?< RestaurantCardPromoted resData={restaurant} />: 
           <RestaurantCard
           
          resData ={restaurant}
          // resName={restaurant.info.name}
          // star={`${restaurant.info.avgRating} stars`}
          // // locatoin={`${restaurant.info.locality}`}
          // areaName={`${restaurant.info.areaName}`}
          // costForTwo={restaurant.info.costForTwo}
          // img={restaurant.info.cloudinaryImageId}
          // cusinie={restaurant.info.cuisines}
        />}
        
        </Link>
        
          
        ))}{" "}
      </div>
    </div>
  );
};
export default Body;
