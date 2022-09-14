import React, { useEffect, useState } from "react";
import { IComment, IReply } from "../interfaces";

type EditFormProps = {
    comment?: IComment,
    reply?: IReply
};

const EditForm = ( { comment, reply } : EditFormProps ) => {
    const [ content, setContent ] = useState<string>("");

    useEffect( () => {
        if (comment) {
            setContent(comment.content);
        }

        if (reply) {
            setContent(reply.content);
        }
    }, [comment, reply])

    // Handle input change on edit form text-area.
    const handleChange = ( e : React.ChangeEvent<HTMLTextAreaElement> ): void => {
        setContent( e.target.value );
    }

    return (
        <form className="flex flex-col">
            <textarea 
                value={ reply ? `@${reply.replyingTo} ${content}` : content }
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