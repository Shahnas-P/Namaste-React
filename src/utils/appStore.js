const { configureStore } = require("@reduxjs/toolkit");
//Import Reducer 
import cartReducer from './cartSlice'

const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default appStore;