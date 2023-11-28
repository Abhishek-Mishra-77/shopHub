import React from 'react';
import './ProductDesign.css'
import { useLocation } from 'react-router';
import {
    LeftOutlined, RightOutlined
} from '@ant-design/icons';



const ProductDesign = () => {

    const location = useLocation().pathname;

    return (
        <div className='product-design'>
            <div className='product-nav-design'>
                <div className='product-circle small shade1'></div>
                <div className='product-circle small-1 shade2'></div>
                <div className='product-circle medium shade3'></div>
                <div className='product-circle large shade4'></div>
            </div>
            <div className='products-nav'>
                <p className='breadCrump'>
                    <span className='home-link'>Home <span>{location === '/' ? '/ shop' : '/ Product Details'}</span></span>
                </p>
                <h3 className='title'>{location === '/' ? ' Shop' : ' Product Details'}</h3>
                {location === '/' ?
                    <div div className='result-sorting'>
                        <p>Showing 1-12 of 36 results</p>
                        <select id='sortigOrder' name='sortigOrder'>
                            <option value="defaultSorting">Default sorting</option>
                            <option value="newest">Latest</option>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                    </div> :
                    <div className='previous-next-buttons'>
                        <div className='left-arrow'>
                            <LeftOutlined />
                        </div>
                        <div className='right-arrow'>
                            <RightOutlined />
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}

export default ProductDesign