"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var nameSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
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
var educatorSchema = new mongoose_1.Schema({
    educatorValue: String,
    currentlyWorking: String,
    experience: String,
    orgName: String,
    currentDesignation: String,
    howUKnow: String,
    suggestionOnEducation: String,
    buyMemberShip: String
}, { _id: false });
var catalystSchema = new mongoose_1.Schema({
    catalystValue: String,
    experience: String,
    orgName: String,
    currentDesignation: String,
    note: String,
    howUKnow: String,
    suggestionOnEducation: String,
    buyMemberShip: String
}, { _id: false });
var individualSchema = new mongoose_1.Schema({
    name: nameSchema,
    gender: {
        type: String,
        enum: ['FEMALE', 'MALE', 'OTHER']
    },
    dob: Date,
    address: addressSchema,
    contact: contactSchema,
    joinUsAs: String,
    educatorDetails: educatorSchema,
    catalystDetails: catalystSchema,
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose_1.model('INDIVIDUAL_FORM', individualSchema);
//# sourceMappingURL=individualForm.js.map