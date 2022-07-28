import React, { useState, useEffect } from "react";
import { CommentProps } from "../types";

type EditFormProps = {
    comment: CommentProps,
};

const EditForm = ( { comment } : EditFormProps ) => {
    const [ commentContent, setCommentContent ] = useState<string>(comment.content);

    // Handle input change on edit form text-area.
    const handleChange = ( e : React.ChangeEvent<HTMLTextAreaElement> ): void => {
        setCommentContent( e.target.value );
    }

    return (
        <form className="flex flex-col">
            <textarea 
                value={commentContent}
                onChange={handleChange} 
                className="edit-form__inputbox border rounded-md p-3"
            />
            <input 
                type="submit" 
                value="UPDATE"
                className="button button__cta mt-3 mb-1 rounded-lg w-28 h-12 self-end"
            />
        </form>
    );
}

export default EditForm;