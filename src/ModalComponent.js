import React, { Component, useState} from "react";
import Modal from "./Modal";

const ModalComponent = () => {
    const [ModalOpen, setModalOpen] = useState(false);
  
    return (
        <>
            <div>
            <button className='btn btn-primary' type='button' onClick={() =>{
                setModalOpen(true);
            }}>Show Modal</button>
            </div>
            {
                ModalOpen &&
                <Modal closeModalFun={setModalOpen} />

            }
            
        </>
    )
}
export default ModalComponent