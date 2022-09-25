import React, { useEffect, useState, FormEventHandler } from "react";
import { useRouter } from "next/router";
import { IComment, IReply } from "../interfaces";

type EditFormProps = {
    comment?: IComment,
    reply?: IReply
};

const EditForm = ( { comment, reply } : EditFormProps ) => {

    // Get next-router.
    const router = useRouter();

    // Manage state of comment or reply content.
    const prefix = reply ? `@${reply.replyingTo} ` : ``;
    const [ content, setContent ] = useState<string>("");
    useEffect(() => {
        // Set initial value to no-prefix and comment's content.
        if (comment) setContent(comment.content)

        // Set initial value to prefix and reply's content.
        if (reply) setContent(prefix + reply.content);
    }, [comment, reply, prefix]);

    // Manage input-prompt message state.
    const [ error, setError ] = useState<string>("");
    const [ success, setSuccess ] = useState<string>("");

    // Handle input change on edit form text-area.
    const handleChange = ( e : React.ChangeEvent<HTMLTextAreaElement> ): void => {
        setContent(e.target.value);

        if (reply && !content.startsWith(prefix)) {
            setError(`Invalid reply: Missing or invalid ${prefix} tag.`);
        } else {
            setError("");
        }
    }

    // Handle edit form submission.
    const handleForm: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();

        // Reset error-prompt.
        setError("");

        // Handling Edit: Comment.
        if (comment) {
            // Run PUT: api/comments/[id] to update the comment.
            const { NEXT_PUBLIC_API_COMMENTS_URL } = process.env;
            const res = await fetch(`${NEXT_PUBLIC_API_COMMENTS_URL}/${comment._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: content.toString()
                }),
            })

            // Return error-prompt if API request failed.
            if (res.status !== 200) {
                return setError("Request Response 400: API failed to response.");
            }

            // Set success message upon successful edit.
            setSuccess('Comment is updated!');
        }

        // Handling Edit: Reply.
        if (reply) {
            // Return error-prompt if upon submission @replyingTo (prefix) is still missing.
            if (!content.startsWith(prefix)) return setError(`Invalid reply: Missing or invalid ${prefix} tag.`);
                
            // Extract the index of replyingTo (prefix) from the reply-content.
            const index : number = prefix.length;

            // Substract the reply-content.
            const replyText = content.toString().slice(index);

            // Run PUT: api/replies/[id] to update the reply.
            const { NEXT_PUBLIC_API_REPLIES_URL } = process.env;
            const res = await fetch(`${NEXT_PUBLIC_API_REPLIES_URL}/${reply._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: replyText
                }),
            })

            // Return error-prompt if API request failed.
            if (res.status !== 200) {
                return setError("Request Response 400: API failed to response.");
            }

            // Set success message upon successful edit.
            setSuccess('Reply is updated!');
        }

        // Set content to empty so the UPDATE button is disabled.
        setContent("");

        // Reload the page.
        router.reload();
    }

    return (
        <form 
            className="flex flex-col"
            onSubmit={handleForm}
        >
            <textarea 
                value={content}
                onChange={handleChange} 
                className="comment-form__inputbox border rounded-md p-3"
            />
            {error !== "" && (<span className="input-prompt__red pt-2">{error}</span>)}
            {success !== "" && (<span className="input-prompt__success pt-2">{success}</span>)}
            <button 
                className="button button__cta mt-3 mb-1 rounded-lg w-28 h-12 self-end"
                type="submit"
                disabled={!content}
            >
                UPDATE
            </button>
        </form>
    );
}

export default EditForm;