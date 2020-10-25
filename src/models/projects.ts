import { Schema, model, Document } from 'mongoose';

const projectSchema = new Schema({
    name: String,
    url: String,
    images: [String],
    desc: String,
    startDate: Date,
    state: {
        type: String,
        enum: ['OVER', 'ON_GOING', 'TO_BE_STARTED']
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

export default model<Document>('PROJECTS', projectSchema);
