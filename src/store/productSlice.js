import { createSlice } from '@reduxjs/toolkit';


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        productDetail: []
    },
    reducers: {
        setProduct(state, action) {
            state.data = action.payload
        },
        ProductDetail(state, action) {
            state.productDetail = action.payload
        }
        
    }
})

export const { setProduct, ProductDetail } = productSlice.actions;

export default productSlice.reducer;




export const fetchProducts = () => {
    return async function fetchProductThunk(dispatch) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/electronics`);
            const data = await response.json();
            dispatch(setProduct(data.slice(0, 4)));
        }
        catch (error) {
            console.log(error)
        }
    }
}