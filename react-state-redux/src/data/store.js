import { configureStore } from "@reduxjs/toolkit";
import productsState  from "./products";
import cartState from "./cart";

export default configureStore({
    reducer: {
        productsState,
        cartState,
    }
})