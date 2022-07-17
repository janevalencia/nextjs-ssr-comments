export type UserProps = {
    image : {
        png : string,
    },
    username : string,
    loggedInUser : boolean,
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