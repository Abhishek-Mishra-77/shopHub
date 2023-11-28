import React from 'react';
import './Shop.css'
import ProductDesign from '../ProductDesign/ProductDesign';
import ProductDetails from '../ProductDetails/ProductDetails';


const Shop = () => {

    return (
        <div className='shop_page'>
            <div className='shop_products'>
                <ProductDesign />
                <ProductDetails />
            </div>
        </div>
    )
}

export default Shop;