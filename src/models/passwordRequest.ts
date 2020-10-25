import { Schema, model, Document, Types } from 'mongoose';

const forgotPasswordSchema = new Schema({
  _user: Types.ObjectId,
  token: String,
  expiry: Date
}, { timestamps: true })

export default model<Document>('FORGOT_PASSWORD_REQUEST', forgotPasswordSchema);
