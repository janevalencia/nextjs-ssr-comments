import mongoose from "mongoose";
import { IComment } from "../interfaces";

/**
 * Declare Schema of Comment model.
 * 
 * Note:
 * 1:M relationship between User to Comments.
 * 1:M relationship between Comment to Replies.
 * 
 * May not be an ideal solution for NoSQL database, but just wanted to show that it is possible
 * to have relationship / structure in NoSQL as well.
 */
const CommentSchema = new mongoose.Schema<IComment>({
    content: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply'
    }]
}, {
    timestamps: true,
});

// Declare Comment model.
const Comment = mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;