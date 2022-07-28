import { Document } from 'mongoose';

export interface UserInterface extends Document {
    name: string;
    email: string;
    role: string;
    phone: string;
}

export interface DatabaseUserInterface extends Document {
    name: string;
    password: string;
    email: string;
    role: string;
    phone: string;
}