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
    },
    address: {
        type: [{
        _id: false,
        address: {
            type: String,
            required: true
        },
        detailedAddress: String,
        company: String,
        zipCode: String,
        city: {
            type: String,
            required: true
        },
        country: {
            type: {
                label: String,
                value: String,
            },
            required: true
        },
        addressName: {
            type: String,
            required: true
        },
        defaultAddress: {
            type: Boolean,
            required: true,
            default: false
        },
        }],
        required: true,
        default: []
}
})

export default mongoose.model<UserInterface>('UtilisateurTempThree', UserSchema)