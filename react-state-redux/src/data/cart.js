import { createSlice } from "@reduxjs/toolkit";
import { isValidItem } from "../services/CartService";

export const cartState = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalCartValue: 0
    },
    reducers: {
        addToCart: (state, action) => {
            if(isValidItem(action.payload,state.cart))
            {
                state.cart.push(action.payload);
                let totalAmount = state.cart.reduce((total,d) => 
                total += parseInt(d.price),0);

                state.totalCartValue = totalAmount + (totalAmount * .18);
            }
        },
        clearCart: (state, action) => {
            state.cart = [];
        },
        calculateTotalBill: (state, action) => {
            
        }
    }
});

export const { addToCart,clearCart } = cartState.actions;
export default cartState.reducer;