import React, { Fragment } from 'react';
import './Products.css'
import {
    FullscreenOutlined, ShoppingOutlined
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { ProductDetail } from '../../store/productSlice';
import { useNavigate } from 'react-router';


const ProductCard = ({ products }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onDetailHandler = (product) => {
        dispatch(ProductDetail(product))
        navigate('/shop')
    }



    return (
        <Fragment>
            {products && products.map((product) =>
                <div key={product.id} className='product-card'>
                    <div className='product-header'>
                        <div className='product-maximize'>
                            <FullscreenOutlined onClick={() => onDetailHandler(product)} />
                        </div>
                        <span className='add-to-card'>
                            <ShoppingOutlined />
                        </span>
                    </div>
                    <div className='product-image'>
                        <div className='common-design' style={{ background: "rgb(240, 150, 158)" }}>
                            <div className='circle'></div>
                        </div>
                        <figure>
                            <img style={{ width: '220px', height: '93px' }} src={product.image} alt='img' />
                        </figure>
                    </div>
                    <div className='product-name'>
                        <p>{product.title.slice(0, 27)}</p>
                    </div>
                    <div className='product-price'>{product.price} $</div>
                </div>
            )}

        </Fragment>
    )
}

export default ProductCard