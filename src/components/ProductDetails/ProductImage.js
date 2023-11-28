import React, { Fragment, useState } from 'react'
import './ProductDetails.css';
import { useSelector } from 'react-redux';




const ProductImage = ({ products }) => {

    const { productDetail: productDetail } = useSelector((state) => state.products);
    const [mainImages, setMainImage] = useState(productDetail ? productDetail : products[0]);



    return (
        <Fragment>
            <div className='product-details-left'>
                <div className='product-details-name'>
                    <p>{mainImages ? mainImages.title : 'SanDisk`s Air Force'}</p>
                </div>
                <div className='product-details-description'>
                    <p>SanDisk's Air Force 1s were among the most popular electronics this year.</p>
                </div>
                <div className='product-image-thumbnails'>
                    {products.map((item) =>
                        <div key={item.id} className='product-image-thumbnail'>
                            <img
                                onClick={() => setMainImage(item)}
                                src={item.image}
                                style={{ width: '85px', height: '40px' }}
                                alt='thumbnail' />
                        </div>
                    )}
                </div>
            </div>
            <div className='product-details-middle'>
                <div className='product-image-gallery'>
                    <img src={`${mainImages ? mainImages.image : 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg'}`} style={{ width: '265px', height: '111px' }} alt={mainImages ? mainImages.title : ''} />
                </div>
                <div className='product-detail-price'>
                    <span>{`${mainImages ? mainImages.price : '64'}`}.00 $</span>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductImage