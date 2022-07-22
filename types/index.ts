export type UserProps = {
    image : {
        png : string,
    },
    username : string,
}

export type CommentProps = {
    id : string,
    timestamp: string,
    votes : number,
    content : string,
    user: UserProps,
    replies? : ReplyProps[],
}

export type ReplyProps = { 
    id : string,
    timestamp: string,
    votes : number,
    content : string,
    user : UserProps,
    replyingTo : string 
} 