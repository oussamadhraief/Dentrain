import mongoose from "mongoose";
import { UserInterface } from "./user.interface";

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
        type: String
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

export default mongoose.model<UserInterface>('TempUtilisateur', UserSchema)