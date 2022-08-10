import mongoose from "mongoose";

// Declare Schema for User model.
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unqiue: true,
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
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;