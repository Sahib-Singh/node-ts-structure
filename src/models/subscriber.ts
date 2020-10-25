import { Schema, model, Document, Types } from 'mongoose';

const subscriberSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default model<Document>('SUBSCRIBER', subscriberSchema);
