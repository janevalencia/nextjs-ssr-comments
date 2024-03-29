import { useState, Dispatch, SetStateAction } from 'react';
import { Spinner, ReactPortal } from './';

type ModalProps = {
    isOpen        : boolean,
    setOn         : Dispatch<SetStateAction<boolean>>,
    title?        : string,
    promptText?   : string,
    btnType?      : string,
    handleDelete? : Function
}

const Modal = ( { isOpen, setOn, title, promptText, btnType, handleDelete } : ModalProps ) => {

    // Manage button enabled/disabled state.
    const [ disabled, setDisabled ] = useState<boolean>(false);

    // Manage loading state.
    const [ loading, setLoading ] = useState<boolean>(false);

    if (!isOpen) return null;

    // Run when delete is confirmed.
    const confirmDelete = () : void => {
        // Disable the buttons.
        setDisabled(true);

        // Set loading to true.
        setLoading(true);

        // Execute delete comment or reply.
        if (handleDelete) handleDelete();
    }

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <div className="transparent-bg" onClick={ () => setOn(false) } />
            <div className="centered-effect">
                <div className="modal px-8 py-6 rounded-md">
                    {/* Modal Heading */}
                    <div className="modal__modal-heading">
                        <h3 className="modal__modal-title">{title}</h3>
                    </div>

                    {/* Modal Prompt Text */}
                    <div className="modal__modal-body my-2">
                        {!loading ? promptText : (
                            <Spinner message='Delete In Progress ...' />
                        )}
                    </div>

                    {/* Modal CTA */}
                    <div className="flex flex-row justify-between gap-4 mt-4 modal__modal-btn">
                        <button 
                            className="modal__modal-btn-close px-2 py-3 rounded-md w-full"
                            onClick={ () => setOn(false) }
                            disabled={disabled}
                        >
                            NO, CANCEL
                        </button>
                        { btnType && btnType.toLowerCase() === 'delete' &&
                            (
                                <button 
                                    className="modal__modal-btn-confirm-delete px-2 py-3 rounded-md w-full"
                                    onClick={confirmDelete}
                                    disabled={disabled}
                                >
                                    YES, DELETE
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </ReactPortal>
    );
}

export default Modal;