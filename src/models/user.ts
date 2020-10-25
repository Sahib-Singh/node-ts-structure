import { IUser } from '../interfaces/IUser';
import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

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

const addressSchema = new Schema({
  formattedAddress: {
    type: String,
    default: ''
  },
  streetAddress: String,
  locality: String,
  subLocality: String,
  region: String,
  country: String,
  postalCode: String,
  geo: {
    index: '2dsphere',
    type: [Number],
    default: [0, 0]
  }
}, { _id: false })

const userSchema = new Schema(
  {
    name: nameSchema,
    contact: contactSchema,
    address: addressSchema,

    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['ADMIN', 'SUB-ADMIN', 'MEMBER']
    },
    picture: String,
    isBlocked: {
      type: Boolean,
      default: false
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user: any = this

  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, 8, function (err, hash) {
    if (err) return next(err)

    user.password = hash
    return next()
  })
})

export default model<IUser & Document>('USER', userSchema);
