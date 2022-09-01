// Interface used to define backend schema and model.
import { Date, Types } from "mongoose"

export interface IUser {
    username: string
    firstname: string
    lastname: string
    imageURL: string
}

export interface IComment {
    content: string
    score: number
    user: Types.ObjectId
    replies: [Types.ObjectId]
}

export interface IReply {
    content: string
    score: number
    replyingTo: string
    user: Types.ObjectId
    parent: Types.ObjectId
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


// Interface to define models on the frontend component.
export interface User {
  _id?: number
  username: string
  firstname: string
  lastname: string
  imageURL: string
  createdAt: Date
  updatedAt: Date
}

// ============= END ===============