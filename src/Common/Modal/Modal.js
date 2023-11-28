import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

const Modal = (props) => {

    const ModalOverlay = () => {
        return <div className='modal-overlay'></div>
    }

    const portId = document.getElementById('overlay-root');

    const handleroutsideClick = (event) => {
        if (event.target.className === 'modal') {
            props.showModalHandler()
        }
    }

    return (
        <Fragment>
            <div className='modal' onClick={handleroutsideClick}>
                {ReactDom.createPortal(<ModalOverlay />, portId)}
                {props.children}
            </div>
        </Fragment>
    )
}

export default Modal