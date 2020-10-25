"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var componentSchema = new mongoose_1.Schema({
    title: String,
    value: String,
    description: String,
    image: String,
    status: {
        type: Boolean,
        default: true
    },
    url: String
}, { timestamps: true, _id: false });
var addressSchema = new mongoose_1.Schema({
    streetAddress: String,
    locality: String,
    subLocality: String,
    region: String,
    country: String,
    postalCode: String,
    formattedAddress: String,
    geo: {
        index: '2dsphere',
        type: [Number],
        default: [0, 0]
    },
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
    email: {
        type: String,
        lowercase: true,
    },
    phone: phoneSchema
}, { _id: false });
var settingsSchema = new mongoose_1.Schema({
    name: String,
    address: addressSchema,
    contact: contactSchema,
    privacyPolicy: componentSchema,
    termsAndCondition: componentSchema,
    others: [componentSchema],
    founder: [String],
    foundingDate: Date,
    logo: [String],
    links: [componentSchema],
}, { timestamps: true });
exports.default = mongoose_1.model('SETTINGS', settingsSchema);
//# sourceMappingURL=settings.js.map