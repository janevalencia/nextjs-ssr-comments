import { useState } from "react";

const defaultVotes = {
    votes : 0,
}

type VoteProps = {
    votes : number,
    id    : string,
    type  : string
} & typeof defaultVotes;

const Vote = ( { votes, id, type } : VoteProps ) => {
    const [ vote, setVote ] = useState<number>(votes);

    // Set the API URL depending on the data type: Comment or Reply.
    let url : string;
    switch(type) {
        case "comment":
          url = process.env.NEXT_PUBLIC_API_COMMENTS_URL as string;
          break;
        case "reply":
          url = process.env.NEXT_PUBLIC_API_REPLIES_URL as string;
          break;
        default:
          url = "";
    }

    // Execute upvote.
    const upVote = async () => {
        // Run API-request to modify the score value.
        const res = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                score: vote + 1
            }),
        })
        
        // Update state for frontend.
        if (res.status === 200) setVote(v => v + 1);
    }

    // Execute downvote.
    const downVote = async () => {
        if (vote > 0) {
            // Run API-request to modify the score value.
            const res = await fetch(`${url}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    score: vote - 1
                }),
            })

            // Update state for frontend.
            if (res.status === 200) setVote(v => v - 1);

        } else {
            // Score cannot go lower than 0.
            setVote(0);
        }
    }

    return (
        <div className="voting flex flex-row-reverse md:flex-col justify-center items-center text-center gap-5 md:gap-3 py-2 px-4 md:p-3 rounded-lg h-10 md:h-28 md:w-11">
            <button className="button button__upvote" onClick={ upVote }>+</button>
            <span className="voting__digit">{vote}</span>
            <button className="button button__downvote" onClick={ downVote }>-</button>
        </div>
    );
}
Vote.defaultProps = defaultVotes;

export default Vote;