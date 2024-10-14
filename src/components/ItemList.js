import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CLOUD_CDN_URL_RESTAURANT_CATEGORY } from "../utils/constants";

const ItemList = ({ itemCards }) => {
    const dispatch = useDispatch()

const handleAddItem = (item)=>{

    
    dispatch(addItem(item))
}


    return (
        <>
            {
                itemCards.map(item => <div key={item?.card?.info?.id} className="bg-red-100 flex justify-between border-b-2 border-amber-200 py-2">

                    <div className="text-start p-1" data-testid="foodItems">
                        <h2 className="font-bold text-sm">{item?.card?.info?.name}</h2>
                        <h2>₹ {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</h2>
                        <p className="text-sm ">{item?.card?.info?.description}</p>
                    </div>
                    <div>
                        <img className="w-28" src={CLOUD_CDN_URL_RESTAURANT_CATEGORY + item?.card?.info?.imageId} />

                        <button  className=" border border-black bg-amber-100 py-0 px-4 rounded" 
                        onClick={()=>handleAddItem(item)}
                        >ADD</button>
                    </div>
                </div>)
            }
        </>


    )
}
export default ItemList;