import { Types } from "mongoose"

export interface IUser {
    username: string;
    firstname: string;
    lastname: string;
    imageURL: string;
}

export interface IComment {
    content: string;
    score: number;
    user: Types.ObjectId;
    replies: [Types.ObjectId];
}

export interface IReply {
    content: string;
    score: number;
    replyingTo: string;
    user: Types.ObjectId;
    parent: Types.ObjectId;
}