import React, { useState } from 'react';
import './Search.css';

import Modal from '../Modal/Modal';
import {
    CloseOutlined
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../store/UtilitySlice';
import { useNavigate } from 'react-router';

const Search = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const onSearchHandler = (e) => {
        e.preventDefault();
        dispatch(searchProduct(searchInput));
        navigate('/blog')
        props.showModalHandler()
    }

    return (
        <Modal showModalHandler={props.showModalHandler}>
            <span onClick={props.showModalHandler} role='button' className='modal-close'>
                <CloseOutlined />
            </span>
            <div className='search-body'>
                <div className='search-box'>
                    <form onSubmit={onSearchHandler}>
                        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type='search' placeholder='Search by keyword' required />
                        <button className='search-submit-button' type='submit'>Search</button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default Search