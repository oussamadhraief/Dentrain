import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    }
})

export default mongoose.model('TempUser', UserSchema)