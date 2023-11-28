import React, { Fragment, useEffect } from 'react';

import {
    StarOutlined
} from '@ant-design/icons';

import Products from '../Products/Products';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
import ProductImage from './ProductImage';


const ProductDetails = () => {

    const dispatch = useDispatch();

    const { data: products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])


    return (
        <Fragment>
            <div className='product-details-container'>
                <div className='product-details-card'>
                    <ProductImage products={products} />
                    <div className='product-details-right'>
                        <span className='product-detail-review'>Reviews:</span>
                        <div className='product-detail-ratings'>
                            <span className='rating-star'>
                                <StarOutlined />
                            </span>
                            <span className='rating-star'>
                                <StarOutlined />
                            </span>
                            <span className='rating-star'>
                                <StarOutlined />
                            </span>
                            <span className='rating-star'>
                                <StarOutlined />
                            </span>
                            <span className='rating-star'>
                                <StarOutlined />
                            </span>
                            <span className='reviews-count'>3.5(60)</span>
                        </div>
                        <div className='product-detail-color'>
                            <span>Select Color:</span>
                            <div className='shoe-colors'>
                                <label htmlFor='color0'>
                                    <input type='radio' id='color0' name='color' value='#f0969e' />
                                    <div className='colors' style={{ background: 'rgb(240, 150, 158)' }}></div>
                                </label>
                                <label htmlFor='color1'>
                                    <input type='radio' id='color1' name='color' value='#d5d5d4' />
                                    <div className='colors' style={{ background: 'rgb(213, 213, 212)' }}></div>
                                </label>
                                <label htmlFor='color2'>
                                    <input type='radio' id='color2' name='color' value='#1e1e1e' />
                                    <div className='colors' style={{ background: 'rgb(30, 30, 30)' }}></div>
                                </label>
                                <label htmlFor='color3'>
                                    <input type='radio' id='color3' name='color' value='#cb141a' />
                                    <div className='colors' style={{ background: 'rgb(203, 20, 26)' }}></div>
                                </label>
                            </div>
                        </div>
                        <div className='product-detail-size'>
                            <span>Select Size:</span>
                            <div className='sizes'>
                                <label htmlFor='size0'>
                                    <input type='radio' id='size0' name='size' value='41' />
                                    <div className='size-box'>41</div>
                                </label>
                                <label htmlFor='size1'>
                                    <input type='radio' id='size1' name='size' value='42' />
                                    <div className='size-box'>42</div>
                                </label>
                                <label htmlFor='size2'>
                                    <input type='radio' id='size2' name='size' value='43' />
                                    <div className='size-box'>43</div>
                                </label>
                                <label htmlFor='size3'>
                                    <input type='radio' id='size3' name='size' value='44' />
                                    <div className='size-box'>44</div>
                                </label>
                                <label htmlFor='size4'>
                                    <input type='radio' id='size4' name='size' value='45' />
                                    <div className='size-box'>45</div>
                                </label>
                                <label htmlFor='size5'>
                                    <input type='radio' id='size5' name='size' value='46' />
                                    <div className='size-box'>46</div>
                                </label>
                                <label htmlFor='size6'>
                                    <input type='radio' id='size6' name='size' value='47' />
                                    <div className='size-box'>47</div>
                                </label>
                                <label htmlFor='size7'>
                                    <input type='radio' id='size7' name='size' value='48' />
                                    <div className='size-box'>48</div>
                                </label>
                            </div>
                        </div>
                        <div className='product-detail-add-to-cart-btn'>
                            <button>Add to cart</button>
                        </div>
                    </div>
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
        </Fragment>
    )
}

export default ProductDetails