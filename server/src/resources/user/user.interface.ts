import { Document } from 'mongoose';

export interface userAddress {
        address: string;
        detailedAddress: string;
        company: string;
        zipCode: string;
        city: string;
        country: {
            label: string;
            value: string;
        };
        addressName: string;
        defaultAddress: boolean;
}

export interface UserInterface extends Document {
    name: string;
    email: string;
    role: string;
    phone: string;
    address: userAddress[];
}

export interface DatabaseUserInterface extends Document {
    name: string;
    password: string;
    email: string;
    role: string;
    phone: string;
    address: userAddress[];
}