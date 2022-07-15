import { useState, useEffect } from "react";

const defaultVotes = {
    votes : 0,
}

const Vote = ( { votes } : { votes : number } ) => {
    const [ vote, setVote ] = useState<number>(votes);

    // Upvote comment.
    const upVote = () : void => {
        setVote( vote + 1 );
    }

    // Downvote comment.
    const downVote = () : void => {
        setVote( vote - 1 );

        if (vote <= 0 ) {
            setVote( 0 );
        }
    }

    return (
        <div className="voting flex flex-row md:flex-col justify-center items-center text-center gap-5 md:gap-3 py-2 px-4 md:p-3 rounded-lg h-10 md:h-28 md:w-11">
            <button className="button button__upvote" onClick={ upVote }>+</button>
            <span className="voting__digit">{vote}</span>
            <button className="button button__downvote" onClick={ downVote }>-</button>
        </div>
    );
}
Vote.defaultProps = defaultVotes;

export default Vote;