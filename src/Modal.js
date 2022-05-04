import React from 'react';
import ModalComponent from './ModalComponent';

function Modal({closeModalFun}) {
 
    return (
        <>
        <div className='modal-component'>
        <div className='modalContent'>
            <p>Modal Open -- Content Here</p>
            <button className='btn btn-primary' type='button' onClick={() =>{
                closeModalFun(false);
            }}>Close Modal</button>
          </div>
        </div>
      </>
    )

}

export default Modal;