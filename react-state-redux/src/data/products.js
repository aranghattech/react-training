import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for products
export const productsState = createSlice({
    name: 'products',
    initialState: {
        products: [
            {id:1, name : "Tea", price : 10, brand : "Lipton", quantity : 10},
            {id:2, name : "Coffee", price : 20, brand : "Nescafe", quantity : 10},
            {id:3, name : "Milk", price : 30, brand : "Amul", quantity : 10},
            {id:4, name : "Bread", price : 40, brand : "Britania", quantity : 10},
            {id:5, name : "Butter", price : 50, brand : "Amul", quantity : 10},
        ]
    },
    reducers: {}
});

// Export the actions
export const {} = productsState.actions;
export default productsState.reducer;