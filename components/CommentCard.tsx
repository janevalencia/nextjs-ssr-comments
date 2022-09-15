import { useState } from "react";
import Image from "next/image";
import moment from "moment";
import { ReplyForm, Modal, EditForm, ReplyCard, Vote } from "./";
import { IUser, IComment } from "../interfaces";
import { useReply } from "../utils/useReply";

type CommentCardProps = {
    currentUser : IUser,
    comment : IComment
};

const CommentCard = ( { currentUser, comment } : CommentCardProps ) => {

    // Manage this comment's list of replies (if exist).
    const { replies, isLoading, isError } = useReply(comment._id);

    // Manage state of Reply Form toggle (display / hide).
    const [ showReplyForm, setShowReplyForm ] = useState<boolean>(false);
    const toggleReplyForm = () : void => {
        setShowReplyForm(true);

        if ( showReplyForm ) {
            setShowReplyForm(false);
        }
    };

    // Manage state of Edit Form toggle (display / hide).
    const [ showEditForm, setEditForm ] = useState<boolean>(false);
    const toggleEditForm = () : void => {
        setEditForm(true);

        if ( showEditForm ) {
            setEditForm(false);
        }
    }

    // Manage state of Delete Modal toggle.
    const [ openModal, setOpenModal ] = useState<boolean>(false);

    return (
        <>
            <div className="comment-card__item p-4 mb-2 rounded-md">
                <div className="grid grid-flow-col place-content-start md:grid-cols-3 md:grid-rows-3 gap-x-4 gap-y-2">

                    {/* Comment-Voting */}
                    <div className="row-start-2 md:row-span-3 col-end-1">
                        <Vote votes={ comment.score } />
                    </div>

                    {/* Comment-User */}
                    <div className="comment-card__user md:row-start-1 row-end-1 col-span-4 md:col-span-2 self-center">
                        <div className="flex flex-row justify-start items-center gap-2 pt-1">
                            <div className="comment-card__user profile-img relative overflow-hidden flex items-center">
                                <Image 
                                    src={ comment.user.imageURL } 
                                    alt={ comment.user.username }
                                    width={35} 
                                    height={35} 
                                    className="absolute rounded-full object-cover w-full"
                                />
                            </div>
                            <p className="comment-card__user username">{ comment.user.username }</p>
                            { comment.user.username === currentUser.username && (<span className="username username__active px-2">you</span>) }
                            <span className="comment-card__user date">
                                { moment(comment.createdAt.toString()).format('MMM Do YYYY, H:mm') }
                            </span>
                        </div>
                    </div>

                    {/* Comment-CTA-buttons */}
                    <div className="comment-card__actions row-start-2 md:row-start-1 col-end-4 justify-self-end self-center">
                        <div className="flex gap-6">
                        { comment.user.username !== currentUser.username ? 
                        (
                            <button
                                className="button button__reply flex flex-row items-center gap-x-2"
                                onClick={ toggleReplyForm }
                            >
                                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                                Reply
                            </button>
                        ) : 
                        (
                            <>
                                <button 
                                    className="button button__delete flex flex-row items-center gap-x-2"
                                    onClick={ () => setOpenModal(true) }
                                >
                                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                                    Delete
                                </button>
                                <button 
                                    className="button button__edit flex flex-row items-center gap-x-2"
                                    onClick={ toggleEditForm }
                                >
                                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                                    Edit
                                </button>
                            </>
                        )}
                        </div>
                    </div>

                    {/* Comment-Content */}
                    <div className="comment-card__content md:row-span-2 col-span-4 md:col-span-3">
                    { showEditForm ? 
                        (
                            <EditForm comment={comment} />
                        ) : 
                        (
                            <p>{ comment.content }</p>
                        )
                    }
                    </div>
                </div>
            </div>

            {/* Reply Form */}
            { showReplyForm && 
                ( 
                    <ReplyForm currentUser={currentUser} parentComment={comment._id} replyingTo={comment.user.username} /> 
                ) 
            }

            {/* Comment-Replies */}
            <div className="section comment-reply flex flex-row">
                { replies && (<div className="comment-reply__line mr-4 md:mx-8 mt-2"></div>) }
                { replies && replies.length > 0 && 
                    (
                        <div className="flex flex-col grow pt-2">
                            {
                                replies.map( (reply, index) => (
                                    <article key={index}>
                                        <ReplyCard currentUser={currentUser} reply={reply} />
                                    </article>
                                ) ) 
                            }
                        </div>
                    )
                }
            </div>

            { openModal && ( 
                    <Modal 
                        setOn={setOpenModal} 
                        title={`Delete comment`} 
                        promptText={`Are you sure you want to delete this comment? This will remove the comment and can't be undone`} 
                        btnType={'DELETE'} 
                    />
            ) }
        </>
    );
}

export default CommentCard;