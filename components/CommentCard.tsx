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
        <div className="comment-card flex flex-row justify-start items-top gap-2">
            <Vote />
            <div className="flex flex-col gap-2 px-2">
                <div className="comment-card__user flex flex-row items-center gap-3 h-auto">
                    <div className="relative overflow-hidden">
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
                <div className="comment-card__description">
                    <p>{ content }</p>
                </div>
            </div>
        </div>
    );
}

export default CommentCard;