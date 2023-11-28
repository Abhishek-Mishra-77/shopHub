import React from 'react';
import './Cart.css';
import {
    DeleteOutlined, PlusOutlined
} from '@ant-design/icons';


const Cart = () => {
    return (
        <div className='main-content noselect'>
            <div className='cart-page noselect'>
                <div className='cart-header'>
                    <h3>Shopping Cart New</h3>
                </div>
                <div className='cart-list'>
                    <ul>
                        <li className='cart-item'>
                            <div className='cart-item-img'>
                                <img src='https://shophub-demo.netlify.app/images/shoe1.png' style={{ width: '90px', height: '38px' }} alt='cart item' />
                            </div>
                            <div className='cart-item-name'>
                                <span>Nike Air Max 97</span>
                            </div>
                            <div className='cart-item-qty'>
                                <span className='cart-delete-item'>
                                    <DeleteOutlined />
                                </span>
                                <input type='number' value='1' disabled />
                                <span className='cart-delete-item'>
                                    <PlusOutlined />
                                </span>
                            </div>
                            <div className='cart-item-price'>
                                $500.00
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='cart-checkout'>
                    <div className='cart-total'>
                        <h4>Total:</h4>
                        <span>$500.00</span>
                    </div>
                    <div className='cart-shipping'>
                        <h4>Shipping:</h4>
                        <span>Free Shipping</span>
                    </div>
                    <div className='cart-checkout-button'>
                        <span>
                            <button>Proceed to Checkout</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart