import mongoose from "mongoose";

const ReplySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    }, 
    score: {
        type: Number,
        required: true,
    },
    replyingTo: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    }
}, {
    timestamps: true,
});

// Declare Reply model.
const Reply = mongoose.models.Reply || mongoose.model('Reply', ReplySchema);

export default Reply;