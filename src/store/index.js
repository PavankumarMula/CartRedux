import { configureStore } from '@reduxjs/toolkit';

// import uiSlice from './ui-slice';
// import cartSlice from './cart-slice';
import uiSlice from './ui-slice';
import cartSlice from './AddtoCart-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

export default store;