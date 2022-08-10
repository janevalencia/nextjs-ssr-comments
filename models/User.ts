import mongoose from "mongoose";
import { IUser } from "../interfaces";

// Declare Schema for User model.
const UserSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: false,
    },
    imageURL: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

// Declare User model.
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;