import { Schema, model, Document, Types } from 'mongoose';


const nameSchema = new Schema({
    firstName: String,
    lastName: String,
}, { _id: false })

const phoneSchema = new Schema({
    dialCode: Number,
    iso2: {
        type: String,
        uppercase: true
    },
    country: {
        type: String,
        uppercase: true
    },
    number: Number,
}, { _id: false })

const contactSchema = new Schema({

    phone: phoneSchema,
    email: {
        type: String,
        lowercase: true,
        index: true
    }
}, { _id: false })

const querySchema = new Schema({
    name: nameSchema,
    contact: contactSchema,
    occupation: String,
    message: String,
    isBlocked: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default model<Document>('QUERY', querySchema);
