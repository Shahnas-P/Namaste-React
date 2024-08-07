import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestuaurant, setlistOfRestuaurant] = useState([]);
  const [restaurantSearch, setRestaurantSearch] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optinal Chaining
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setlistOfRestuaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  //Conditional Rendering

  return listOfRestuaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            value={restaurantSearch}
            onChange={(e) => {
              setRestaurantSearch(e.target.value);
            }}
          />

          <button
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
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            const filteredData = listOfRestuaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setlistOfRestuaurant(filteredData);
          }}
        >
          Top-Rated
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resName={restaurant.info.name}
            star={`${restaurant.info.avgRating} stars`}
            // locatoin={`${restaurant.info.locality}`}
            areaName={`${restaurant.info.areaName}`}
            costForTwo={restaurant.info.costForTwo}
            img={restaurant.info.cloudinaryImageId}
            cusinie={restaurant.info.cuisines}
          />
        ))}{" "}
      </div>
    </div>
  );
};
export default Body;
