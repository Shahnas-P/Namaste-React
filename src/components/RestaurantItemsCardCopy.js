// import { CLOUD_CDN_URL } from "../utils/constants";
// const RestaurantItemsCard = ({ itemCards }) => {
//   return (
//     <>
//       <div className="restaurant-items-container">
//         {itemCards.map((item) => (
//           <div key={item?.card?.info?.id} className="items-container">
//             <div className="items-container-1">
//               <div className="items-details">
//                 <h4>{item?.card?.info?.name}</h4>
//                 <p>₹{item?.card?.info?.price / 100}</p>
//                 <div className="rating-star">
//                   <span className="material-symbols-outlined">star</span> 4.2
//                 </div>
//                 <p>{item?.card?.info?.category}</p>
//               </div>
//               <div className="image-container">
//                 <img src={CLOUD_CDN_URL + item?.card?.info?.imageId} />
//                 <button className="button-add">ADD</button>
//               </div>
//             </div>
//             <div className="line"></div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
// export default RestaurantItemsCard;
