import React, { useState, FormEventHandler } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { IUser } from "../interfaces";

type ReplyFormProps = {
    currentUser : IUser,
    parentCommentID: string,
    replyingTo: string,
};

const ReplyForm = ( { currentUser, parentCommentID, replyingTo } : ReplyFormProps ) => {

    // Get next-router.
    const router = useRouter();

    // Manage reply-content state.
    const prefix = `@${replyingTo} `;
    const [ replyContent, setReplyContent ] = useState<string>(prefix);

    // Manage input-prompt message state.
    const [ error, setError ] = useState<string>("");

    // Handle input change on reply-box.
    const handleChange = ( e : React.ChangeEvent<HTMLTextAreaElement> ): void => {
        setReplyContent(e.target.value);
        
        // Verify the required @replyingTo exists.
        if (!replyContent.startsWith(prefix)) {
            setError(`Invalid reply: Missing or invalid ${prefix} tag.`);
        } else {
            setError("");
        }
    }

    // Handle add a reply form submission.
    const handleForm: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        // Reset error-prompt.
        setError("");

        // Return error-prompt if upon submission @replyingTo (prefix) is still missing.
        if (!replyContent.startsWith(prefix)) return setError(`Invalid reply: Missing or invalid ${prefix} tag.`);
            
        // Extract the index of replyingTo (prefix) from the reply-content.
        const index : number = prefix.length;

        // Substract the reply-content.
        const replyText = replyContent.toString().slice(index);

        // Construct POST Reply structure.
        const reply = {
            content    : replyText,
            score      : 0,
            replyingTo : replyingTo,
            user       : currentUser._id,
            parent     : parentCommentID
        }

        // Run POST: api/comments to add new comment to database.
        const { NEXT_PUBLIC_API_REPLIES_URL } = process.env;
        const res = await fetch(`${NEXT_PUBLIC_API_REPLIES_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reply),
        })

        // Return error-prompt if API request failed.
        if (res.status !== 200) {
            return setError("Request Response 400: API failed to response.");
        }

        // Set replyContent to empty so the REPLY button is disabled.
        setReplyContent("");

        // Reload the page.
        router.reload();
    }
    
    // Render component.
    return (
        <div className="comment-form p-4 mb-2 rounded-md">
            <form 
                className="grid grid-cols-2 gap-3 md:flex md:items-start"
                onSubmit={handleForm}
            >
                <div className="comment-card__user profile-img relative overflow-hidden row-start-2 flex items-center">
                    <Image 
                        src={ currentUser.imageURL } 
                        alt={ currentUser.username }
                        width={40} 
                        height={40} 
                        className="absolute rounded-full object-cover w-full"
                    />
                </div>
                <div className="row-start-1 col-span-2 md:flex-grow">
                    <textarea 
                        className="comment-form__inputbox border rounded-md p-3 w-full"
                        onChange={handleChange}
                        value={replyContent}
                    />
                    {error !== "" && (
                        <span className="input-prompt__red">{error}</span>
                    )}
                </div>
                <button 
                    className="button button__cta rounded-lg w-28 h-12 row-start-2 justify-self-end"
                    type="submit"
                    disabled={!replyContent}
                >
                    REPLY
                </button>
            </form>
        </div>
    );
}

export default ReplyForm;