import React from 'react'
import './Blog.css';
import Products from '../Products/Products'
import { useSelector } from 'react-redux'



const Blog = () => {

    const { data: products } = useSelector((state) => state.products);
    const { searchInput: searchInput } = useSelector((state) => state.utility);


    return (
        <div className='blog-page'>
            <div className='blog-product'>
                <h4>{searchInput}</h4>
                <div className='related-products-card'>
                    <Products products={products} />
                </div>
            </div>

        </div>
    )
}

export default Blog