import Image from "next/image";
import Vote from "./Vote";

// To be deleted later once DB is setup.
const SampleUser = {
    "id": 1,
    "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    "createdAt": "1 month ago",
    "score": 12,
    "user": {
      "image": { 
        "png": "/assets/images/image-amyrobson.png"
      },
      "username": "amyrobson",
      "active": true,
    },
    "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "./images/avatars/image-ramsesmiron.png"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "./images/avatars/image-juliusomo.png"
            },
            "username": "juliusomo"
          }
        }
    ]
}

const CommentCard = () => {
    const { id, content, createdAt, score, user, replies } = SampleUser;
    return (
        <div className="comment-card grid grid-flow-col md:grid-rows-3 gap-x-4 gap-y-2">
            <div className="row-start-2 md:row-span-3 col-end-1">
                <Vote votes={ score } />
            </div>
            <div className="comment-card__user md:row-start-1 row-end-1 col-span-4 md:col-span-1">
                <div className="flex flex-row justify-start items-center gap-2 pt-1">
                    <div className="comment-card__user profile-img relative overflow-hidden flex items-center">
                        <Image 
                            src={ user.image.png } 
                            alt={ user.username }
                            width={35} 
                            height={35} 
                            className="absolute rounded-full object-cover w-full"
                        />
                    </div>
                    <p className="comment-card__user username">{ user.username }</p>
                    <span className="comment-card__user date">{ createdAt }</span>
                </div>
            </div>
            <div className="comment-card__cta row-start-2 md:row-start-1 col-end-4 flex">
                { ! user.active ? (
                    <a href="" className="button button__reply flex flex-row items-center gap-x-2">
                        <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                        Reply
                    </a>
                ) : (
                    <div className="flex flex-row justify-end gap-6">
                        <a href="" className="button button__delete flex flex-row items-center gap-x-2">
                            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                            Delete
                        </a>
                        <a href="" className="button button__edit flex flex-row items-center gap-x-2">
                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                            Edit
                        </a>
                    </div>
                )}
            </div>
            <div className="comment-card__content md:row-span-2 col-span-4 md:col-span-3">
                <p>{ content }</p>
            </div>
        </div>
    );
}

export default CommentCard;