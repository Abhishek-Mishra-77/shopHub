import { createSlice } from "@reduxjs/toolkit";


const utilitySlice = createSlice({
    name: 'utility',
    initialState: {
        searchInput: ''
    },
    reducers: {
        searchProduct(state, action) {
            state.searchInput = action.payload
        }
    }
})


export const { searchProduct } = utilitySlice.actions;

export default utilitySlice.reducer;