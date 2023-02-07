import { createSlice } from "@reduxjs/toolkit"
const cartUiIsVisible=createSlice({
    name:"ui",
    initialState:{uiisVisible:false},
    reducers:{
        toggleCart(state,action){
            state.uiisVisible= !state.uiisVisible
        }
    }
})
export const cartUiActions=cartUiIsVisible.actions
export default cartUiIsVisible