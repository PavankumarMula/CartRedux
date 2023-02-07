import { createSlice } from "@reduxjs/toolkit";
const addToCartSlice=createSlice({
    name:"cart",
    initialState:{items:[],totalQuantity:0},
    reducers:{
        addToCart(state,action){
        state.totalQuantity++
        const newItem=action.payload
        const existingItem=state.items.find(item=>item.id===newItem.id);
        if(!existingItem){
            state.items.push({
                title:newItem.title,
                id:newItem.id,
                totalprice:newItem.price,
                quantity:1,
                price:newItem.price
            })
        }else{
            existingItem.totalprice=existingItem.totalprice+newItem.price
            existingItem.quantity=existingItem.quantity+1
        }
    },
    removeFromCart(state,action){
        const id=action.payload
        state.totalQuantity--
        const requestedItem=state.items.find(item=>item.id===id)
        if(requestedItem.quantity===1){
            state.items=state.items.filter(item=>item.id!==id);
        }else{
            requestedItem.quantity=requestedItem.quantity-1;
            requestedItem.totalprice=requestedItem.totalprice-requestedItem.price
        }
    }
}
})
export const addToCartSliceActions=addToCartSlice.actions;
export default addToCartSlice;