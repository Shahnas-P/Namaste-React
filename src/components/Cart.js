import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItem = useSelector((store) => store.cart.item)
    console.log(cartItem);
    const dispatch = useDispatch()

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    return (
        <div>
            <div className="flex justify-center p-3 align-middle border-red-400">
                <div>        
                    <h1 className="text-xl font-bold text-center p-3" >Cart</h1>
                </div>
                <div>        
                    <button onClick={handleClearCart} className="border text-center mt-4 px-1 bg-black text-white rounded-md" >Clear Cart</button>
                </div>
            </div>

            <div className="w-6/12 m-auto" >

            {cartItem.length ===0 && <h1 className="font-semibold text-4xl text-center text-red-800 mt-3">Your cart is Empty..</h1>}

            <ItemList itemCards={cartItem} />
            </div>
        </div>
    )
}
export default Cart;