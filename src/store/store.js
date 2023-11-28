import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import UtilitySlice from "./UtilitySlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        utility: UtilitySlice
    }
})

export default store;