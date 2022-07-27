import { Dispatch, SetStateAction } from 'react';

type ModalProps = {
    setOn : Dispatch<SetStateAction<boolean>>,
    title? : string,
    promptText? : string,
    btnType? : string,
}

const Modal = ( { setOn, title, promptText, btnType } : ModalProps ) => {

    const deleteComment = () : void => {
        // Temp: will be changed to run DELETE operation.
        console.log( 'Comment deleted.' )

        // Close Modal once delete is done!
        setOn( false );
    }

    return (
        <>
            <div className="transparent-bg" onClick={ () => setOn(false) } />
            <div className="centered-effect">
                <div className="modal px-8 py-6 rounded-md">
                    {/* Modal Heading */}
                    <div className="modal__modal-heading">
                        <h3 className="modal__modal-title">{title}</h3>
                    </div>

                    {/* Modal Prompt Text */}
                    <div className="modal__modal-body my-2">
                        {promptText}
                    </div>

                    {/* Modal CTA */}
                    <div className="flex flex-row justify-between gap-4 mt-4 modal__modal-btn">
                        <button 
                            className="modal__modal-btn-close p-3 rounded-md w-full"
                            onClick={ () => setOn(false) }
                        >
                            NO, CANCEL
                        </button>
                        { btnType && btnType.toLowerCase() === 'delete' &&
                            (
                                <button 
                                    className="modal__modal-btn-confirm-delete p-3 rounded-md w-full"
                                    onClick={ deleteComment }
                                >
                                    YES, DELETE
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;