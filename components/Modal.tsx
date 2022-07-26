import { Dispatch, SetStateAction } from 'react';

type ModalProps = {
    setOn : Dispatch<SetStateAction<boolean>>,
}

const Modal = ( {setOn} : ModalProps ) => {
    return (
        <>
            <div className="transparent-bg" onClick={ () => setOn(false) } />
        </>
    );
}

export default Modal;