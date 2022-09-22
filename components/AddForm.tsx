import React, { useRef, FormEventHandler, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { IUser } from "../interfaces";

type CommentFormProps = {
    currentUser : IUser
};

const CommentForm = ( { currentUser } : CommentFormProps ) => {

    // Get next-router.
    const router = useRouter();

    // Manage input-prompt message state.
    const [error, setError] = useState("");

    // Refs to form input element.
    const refComment = useRef<HTMLTextAreaElement>(null);

    // Handle add new comment form submission.
    const handleForm: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        // Reset error-prompt.
        setError("");

        // Verify required field has been entered.
        if (refComment.current && refComment.current.value === "") {
            return setError("Required field.");
        }

        if (refComment.current) {
            // Construct POST Comment structure.
            const comment = {
                content: refComment.current.value.toString(),
                score: 0,
                user: currentUser._id
            }

            // Run POST: api/comments to add new comment to database.
            const { NEXT_PUBLIC_API_COMMENTS_URL } = process.env;
            const res = await fetch(`${NEXT_PUBLIC_API_COMMENTS_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(comment),
            })

            if (res.status !== 200) {
                return setError("Request Response 400: API failed to response.");
            }
            
            // Clear the refs value for next use.
            refComment.current.value = "";

            // Reload the page without adding to history stack.
            return router.replace(router.asPath);
        }
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
                        placeholder="Add a comment..."
                        ref={refComment}
                    />
                    {error && (
                        <span className="input-prompt__red">{error}</span>
                    )}
                </div>
                <button 
                    className="button button__cta rounded-lg w-28 h-12 row-start-2 justify-self-end"
                    type="submit"
                >
                    SEND
                </button>
            </form>
        </div>
    );
}

export default CommentForm;