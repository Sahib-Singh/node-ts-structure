"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var nameSchema = new mongoose_1.Schema({
    salutation: String,
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
var companySchema = new mongoose_1.Schema({
    legalStructure: String,
    headQuarter: String,
    noOfBranches: String,
    gstNo: String,
    panNo: String,
}, { _id: false });
var corporateSchema = new mongoose_1.Schema({
    orgName: String,
    orgType: {
        type: String,
        enum: ['GOVERNMENT', 'PRIVATE', 'NGO']
    },
    orgBelong: String,
    address: addressSchema,
    establishOn: Date,
    websiteUrl: String,
    orgContact: contactSchema,
    companyProfile: companySchema,
    name: nameSchema,
    designation: String,
    contact: contactSchema,
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose_1.model('CORPORATE_FORM', corporateSchema);
//# sourceMappingURL=corporateForm.js.map