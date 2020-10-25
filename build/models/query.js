"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
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
var querySchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.model('QUERY', querySchema);
//# sourceMappingURL=query.js.map