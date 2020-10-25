import { Schema, model, Document } from 'mongoose';

const sessionSchema = new Schema({
  _user: Schema.Types.ObjectId,
  fcmToken: String,
  deviceId: String
})

export default model< Document>('SESSION', sessionSchema);
