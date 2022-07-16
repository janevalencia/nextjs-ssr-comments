import Image from "next/image";
import { Vote } from "../components";

const SampleUser = {
    "id": 1,
    "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    "createdAt": "1 month ago",
    "score": 12,
    "user": {
      "image": { 
        "png": "/assets/images/image-amyrobson.png"
      },
      "username": "amyrobson"
    },
    "replies": []
}

const CommentCard = () => {
    const { id, content, createdAt, score, user, replies } = SampleUser;
    return (
        <div className="comment-card grid grid-rows-3 grid-flow-col gap-x-4 gap-y-2">
            <div className="row-span-3">
                <Vote />
            </div>
            <div className="comment-card__user col-span-3">
                <div className="flex flex-row justify-start items-center gap-2">
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
            <div className="comment-card__content row-span-2 col-span-3">
                <p>{ content }</p>
            </div>
        </div>
    );
}

export default CommentCard;