import { configureStore } from "@reduxjs/toolkit";
import productsState  from "./products";

export default configureStore({
    reducer: {
        productsState,
    }
})