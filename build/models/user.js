"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var nameSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
}, { _id: false });
var phoneSchema = new mongoose_1.Schema({
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
}, { _id: false });
var contactSchema = new mongoose_1.Schema({
    phone: phoneSchema,
    email: {
        type: String,
        lowercase: true,
        index: true
    }
}, { _id: false });
var addressSchema = new mongoose_1.Schema({
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
}, { _id: false });
var userSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
userSchema.pre("save", function (next) {
    var user = this;
    if (!user.isModified('password'))
        return next();
    bcryptjs_1.default.hash(user.password, 8, function (err, hash) {
        if (err)
            return next(err);
        user.password = hash;
        return next();
    });
});
exports.default = mongoose_1.model('USER', userSchema);
//# sourceMappingURL=user.js.map