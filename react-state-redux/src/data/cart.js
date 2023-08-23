import { createSlice } from "@reduxjs/toolkit";
import { isValidItem } from "../services/CartService";

export const cartState = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            if(isValidItem(action.payload,state.cart))
                state.cart.push(action.payload);
        },
        clearCart: (state, action) => {
            state.cart = [];
        }
    }
});

export const { addToCart,clearCart } = cartState.actions;
export default cartState.reducer;