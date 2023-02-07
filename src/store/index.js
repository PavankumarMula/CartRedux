import { configureStore } from "@reduxjs/toolkit";
import cartUiIsVisible from "./Ui-slice";
import addToCartSlice from "./AddtoCart-slice";
const store=configureStore({
    reducer:{ui:cartUiIsVisible.reducer,addToCart:addToCartSlice.reducer}
})
export default store;