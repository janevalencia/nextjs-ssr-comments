const Vote = ( { votes } : { votes : number } ) => {
    return (
        <div className="voting flex flex-col justify-center align-middle text-center gap-3 p-2 rounded-lg w-11">
            <button className="button button__upvote">+</button>
            <span className="voting__digit">{votes}</span>
            <button className="button button__downvote">-</button>
        </div>
    );
}

export default Vote;