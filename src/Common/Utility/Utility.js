import React, { useState } from 'react';
import './Utility.css'
import {
    SearchOutlined
} from '@ant-design/icons';

const Utility = (props) => {

   

    const themChangeHandler = () => {
        console.log('keljr')
    }


    return (
        <section className='utility-buttons-container p1'>
            <div className='searchButton'>
                {<span onClick={() => props.showModalHandler()}>
                    <SearchOutlined />
                </span>}
            </div>
            <label className='themeButton'>
                <div className='switch' onClick={themChangeHandler}>
                    <input id='switch' type="checkbox" role="switch" />
                    <span className='slider round'></span>
                </div>
            </label>
        </section>
    )
}

export default Utility