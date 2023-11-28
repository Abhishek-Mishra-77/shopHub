import React from 'react'
import './Blog.css';
import Products from '../Products/Products'
import { useSelector } from 'react-redux'



const Blog = () => {

    const { data: products } = useSelector((state) => state.products);
    const { searchInput: searchInputData } = useSelector((state) => state.utility);


    return (
        <div className='blog-page'>
            <div className='blog-product'>
                <h4>{searchInputData}</h4>
                <div className='related-products-card'>
                    <Products products={products} />
                </div>
            </div>

        </div>
    )
}

export default Blog