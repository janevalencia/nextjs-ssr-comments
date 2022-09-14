// Interface used to define schema and model.
import { Date } from "mongoose"

export interface IUser {
    _id: string
    username: string
    firstname: string
    lastname: string
    imageURL: string
    createdAt: Date
    updatedAt: Date
}

export interface IComment {
    _id: string
    content: string
    score: number
    user: IUser
    createdAt: Date
    updatedAt: Date
}

export interface IReply {
    _id: string
    content: string
    score: number
    replyingTo: string
    user: IUser
    parent: string
    createdAt: Date
    updatedAt: Date
}
// ============= END ===============


// Interface used to define response object.
export interface ResponseFunctions {
  GET?: Function
  POST?: Function
  PUT?: Function
  DELETE?: Function
}
// ============= END ===============