// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import RestaurantItemsCard from "./RestaurantItemsCard";
// import Shimmer1 from "./Shimmer1";
// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   const [arrow, setArrow] = useState(true);
//   const [arrowUp, setArrowUp] = useState(
//     <span className="material-symbols-outlined">keyboard_arrow_up</span>
//   );
//   const [componentSwift, setComponentSwift] = useState(null);
//   const [itemCards, setItemCards] = useState([]);
//   const [restaurantItemSearch, setRestaurantItemSearch] = useState("");
//   const { id } = useParams();
//   // console.log(id);
//   useEffect(() => {
//     fetchMenu();
//   }, [id]);
//   const fetchMenu = async () => {
//     try {
//       const data = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`
//       );
//       const json = await data.json();
//       setResInfo(json.data);

//       const items =
//         resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
//       setItemCards(items || []);

//       setComponentSwift(<RestaurantItemsCard itemCards={items || []} />);
//     } catch (error) {
//       console.log("Error Fetching menu : ", error);
//       setResInfo(null);
//       setItemCards([]);
//       setComponentSwift(null);
//     }
//   };
//   if (resInfo === null) return <Shimmer />;

//   const {
//     name,
//     areaName,
//     cloudinaryImageId,
//     costForTwoMessage,
//     cuisines = [],
//     avgRatingString,
//   } = resInfo;
//   console.log(resInfo);

//   // ({ itemCards } =
//   //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

//   return (
//     <div className="menu">
//       <h2 className="title">{name || "Restaurant"}</h2>
//       <div className="card1">
//         <p className="rating-para">
//           <span className="material-symbols-outlined star">stars</span> &nbsp;
//           {avgRatingString || "N/A"}(100+ ratings) •{" "}
//           {costForTwoMessage || "N/A"}
//         </p>
//         <p className="orange-color">{cuisines.join(",")}</p>
//         <p>{areaName || "N/A"}</p>
//         <p>25-30 mins</p>
//         <p className="direction">
//           <span className="material-symbols-outlined">directions_bike</span> 3.9
//           kms | ₹42 Delivery fee will apply
//         </p>
//         <p className="orange-color">Free delivery on orders above ₹199</p>
//       </div>
//       <div className="menu-title">
//         <p>--- MENU ---</p>
//         <div className="input-field-container">
//           <input
//             value={restaurantItemSearch}
//             onChange={(e) => {
//               setRestaurantItemSearch(e.target.value);
//             }}
//             className="search-bar"
//             placeholder="Search for dishes"
//           />
//           &nbsp;
//           <button className=" button">
//             <span className="material-symbols-outlined search">search</span>
//           </button>
//         </div>
//       </div>
//       <div className="recommended">
//         <h4>Recommended &nbsp;({itemCards.length})</h4>
//         <button
//           onClick={() => {
//             if (arrow === true) {
//               setComponentSwift(<Shimmer1 />);

//               setArrowUp(
//                 <span className="material-symbols-outlined">
//                   keyboard_arrow_down
//                 </span>
//               );
//               setArrow(false);
//             } else {
//               setComponentSwift(<RestaurantItemsCard itemCards={itemCards} />);

//               setArrowUp(
//                 <span className="material-symbols-outlined">
//                   keyboard_arrow_up
//                 </span>
//               );
//               setArrow(!arrow);
//             }
//           }}
//         >
//           {" "}
//           {arrowUp}
//         </button>
//       </div>
//       {/* <RestaurantItemsCard /> */}
//       {componentSwift}
//     </div>
//   );
// };
// export default RestaurantMenu;
