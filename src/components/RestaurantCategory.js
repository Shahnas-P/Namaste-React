import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory =({data,showItems,setShowIndex}) =>{

// console.log(data);
const {itemCards,title}=data
// const [showItems,setShowItems]=useState(false)
// console.log(itemCards);


const handleClick =()=>{
setShowIndex()
}

    return(
    <div className="mt-5 flex justify-center">
        <div className="w-9/12 bg-amber-100  shadow-md  px-4" >
        <div className="flex justify-between p-2" onClick={handleClick}>
        <span className="font-bold text-lg ">{title} ({itemCards.length})</span>
        <span>⬇</span>
        </div>
           
            <div>
               {
                showItems && <ItemList  itemCards={itemCards} />

               }

            </div>
        </div>
       
    </div>
    )
}
export default RestaurantCategory