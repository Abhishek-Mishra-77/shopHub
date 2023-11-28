import React, { useEffect } from 'react';
import './Home.css'
import Products from '../Products/Products';
import ProductDesign from '../ProductDesign/ProductDesign';
import { fetchProducts } from '../../store/productSlice';
import { useSelector, useDispatch } from 'react-redux'



const Home = () => {

    const dispatch = useDispatch();

    const { data: products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])


    return (
        <div className='main-page'>
            <div className='products'>
                <ProductDesign />
                <div className='product-container'>
                    <div className='product-cards'>
                        <Products products={products} />
                    </div>
                </div>
                <div className='related-products'>
                    <div className='related-products-header'>
                        <h1>Related Products</h1>
                    </div>
                </div>
                <div className='related-products-card'>
                    <Products products={products} />
                </div>
            </div>

        </div>
    )
}

export default Home