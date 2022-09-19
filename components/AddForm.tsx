import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IUser } from "../interfaces";

type CommentFormProps = {
    currentUser : IUser
};

const CommentForm = ( { currentUser } : CommentFormProps ) => {
    const [ commentContent, setCommentContent ] = useState<string>("");

    // Handle input change on comment text-area.
    const handleChange = ( e : React.ChangeEvent<HTMLTextAreaElement> ): void => {
        setCommentContent( e.target.value );
    }
    
    return (
        <div className="comment-form p-4 mb-2 rounded-md">
            <form className="grid grid-cols-2 gap-3 md:flex md:items-start">
                <div className="comment-card__user profile-img relative overflow-hidden row-start-2 flex items-center">
                    <Image 
                        src={ currentUser.imageURL } 
                        alt={ currentUser.username }
                        width={40} 
                        height={40} 
                        className="absolute rounded-full object-cover w-full"
                    />
                </div>
                <textarea 
                    value={commentContent}
                    onChange={handleChange} 
                    placeholder="Add a comment..."
                    className="comment-form__inputbox border rounded-md p-3 row-start-1 col-span-2 md:flex-grow"
                />
                <button 
                    className="button button__cta rounded-lg w-28 h-12 row-start-2 justify-self-end"
                    type="submit"
                    disabled={!commentContent}
                >
                    SEND
                </button>
            </form>
        </div>
    );
}

export default CommentForm;