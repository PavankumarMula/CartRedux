import { configureStore } from "@reduxjs/toolkit";
import cartUiIsVisible from "./Ui-slice";
const store=configureStore({
    reducer:{ui:cartUiIsVisible.reducer}
})
export default store;