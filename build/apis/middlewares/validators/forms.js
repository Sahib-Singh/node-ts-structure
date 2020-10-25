"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var getFormValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        pagination: Joi.string().required(),
        search: Joi.string().optional().allow(''),
        limit: Joi.string().optional(),
        page: Joi.string().required()
    })
        .validate(req.query).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var addIndividualFormValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        name: Joi.object({
            firstName: Joi.string().alphanum().min(3).max(30).required(),
            lastName: Joi.string().alphanum().min(3).max(30).optional(),
        }).required(),
        gender: Joi.string().valid('FEMALE', 'MALE', 'OTHER').required(),
        dob: Joi.date().required(),
        address: Joi.object().keys({
            region: Joi.string().allow('').required(),
            country: Joi.string().allow('').required(),
            locality: Joi.string().allow('').required(),
            postalCode: Joi.string().allow('').required(),
            geo: Joi.array().items(Joi.number()).min(2).required(),
            subLocality: Joi.string().allow('').required(),
            streetAddress: Joi.string().allow('').required(),
            formattedAddress: Joi.string().allow('').required(),
        }).optional(),
        contact: Joi.object({
            email: Joi.string().email().required(),
            phone: Joi.object().keys({
                dialCode: Joi.number().required(),
                iso2: Joi.string().required(),
                country: Joi.string().required(),
                number: Joi.number().required(),
            })
        }).required(),
        joinUsAs: Joi.string().valid('EDUCATOR', 'CATALYST').required(),
        educatorDetails: Joi.object({
            educatorValue: Joi.string().optional().allow(''),
            currentlyWorking: Joi.string().optional().allow(''),
            experience: Joi.string().optional().allow(''),
            orgName: Joi.string().optional().allow(''),
            currentDesignation: Joi.string().optional().allow(''),
            howUKnow: Joi.string().optional().allow(''),
            suggestionOnEducation: Joi.string().optional().allow(''),
            buyMemberShip: Joi.string().optional().allow('')
        }).optional(),
        catalystDetails: Joi.object({
            catalystValue: Joi.string().optional().allow(''),
            experience: Joi.string().optional().allow(''),
            orgName: Joi.string().optional().allow(''),
            currentDesignation: Joi.string().optional().allow(''),
            note: Joi.string().optional().allow(''),
            howUKnow: Joi.string().optional().allow(''),
            suggestionOnEducation: Joi.string().optional().allow(''),
            buyMemberShip: Joi.string().optional().allow('')
        }).optional()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var addSchoolFormValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        orgName: Joi.string().required(),
        orgType: Joi.string().valid('SCHOOL', 'INSTITUTION').required(),
        orgBelong: Joi.string().required(),
        address: Joi.object().keys({
            region: Joi.string().allow('').required(),
            country: Joi.string().allow('').required(),
            locality: Joi.string().allow('').required(),
            postalCode: Joi.string().allow('').required(),
            geo: Joi.array().items(Joi.number()).min(2).required(),
            subLocality: Joi.string().allow('').required(),
            streetAddress: Joi.string().allow('').required(),
            formattedAddress: Joi.string().allow('').required(),
        }).optional(),
        establishOn: Joi.date().required(),
        websiteUrl: Joi.string().required(),
        orgContact: Joi.object({
            email: Joi.string().email().required(),
            phone: Joi.object().keys({
                dialCode: Joi.number().required(),
                iso2: Joi.string().required(),
                country: Joi.string().required(),
                number: Joi.number().required(),
            })
        }).required(),
        companyProfile: Joi.object({
            legalStructure: Joi.string().required(),
            headQuarter: Joi.string().required(),
            noOfBranches: Joi.string().optional(),
            gstNo: Joi.string().optional(),
            panNo: Joi.string().optional(),
        }).required(),
        name: Joi.object({
            salutation: Joi.string().max(5).required(),
            firstName: Joi.string().alphanum().min(3).max(30).required(),
            lastName: Joi.string().alphanum().min(3).max(30).optional(),
        }).required(),
        designation: Joi.string().required(),
        contact: Joi.object({
            email: Joi.string().email().required(),
            phone: Joi.object().keys({
                dialCode: Joi.number().required(),
                iso2: Joi.string().required(),
                country: Joi.string().required(),
                number: Joi.number().required(),
            })
        }).required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var addCorporateFormValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        orgName: Joi.string().required(),
        orgType: Joi.string().valid('GOVERNMENT', 'PRIVATE', 'NGO').required(),
        orgBelong: Joi.string().required(),
        address: Joi.object().keys({
            region: Joi.string().allow('').required(),
            country: Joi.string().allow('').required(),
            locality: Joi.string().allow('').required(),
            postalCode: Joi.string().allow('').required(),
            geo: Joi.array().items(Joi.number()).min(2).required(),
            subLocality: Joi.string().allow('').required(),
            streetAddress: Joi.string().allow('').required(),
            formattedAddress: Joi.string().allow('').required(),
        }).optional(),
        establishOn: Joi.date().required(),
        websiteUrl: Joi.string().required(),
        orgContact: Joi.object({
            email: Joi.string().email().required(),
            phone: Joi.object().keys({
                dialCode: Joi.number().required(),
                iso2: Joi.string().required(),
                country: Joi.string().required(),
                number: Joi.number().required(),
            })
        }).required(),
        name: Joi.object({
            salutation: Joi.string().max(5).required(),
            firstName: Joi.string().alphanum().min(3).max(30).required(),
            lastName: Joi.string().alphanum().min(3).max(30).optional(),
        }).required(),
        companyProfile: Joi.object({
            legalStructure: Joi.string().required(),
            headQuarter: Joi.string().required(),
            noOfBranches: Joi.string().optional(),
            gstNo: Joi.string().optional(),
            panNo: Joi.string().optional(),
        }).required(),
        designation: Joi.string().required(),
        contact: Joi.object({
            email: Joi.string().email().required(),
            phone: Joi.object().keys({
                dialCode: Joi.number().required(),
                iso2: Joi.string().required(),
                country: Joi.string().required(),
                number: Joi.number().required(),
            })
        }).required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
function returnResponse(res, error) {
    return res.status(400).json({
        status: false,
        message: error,
        data: null
    });
}
exports.default = {
    getFormValidate: getFormValidate,
    addIndividualFormValidate: addIndividualFormValidate,
    addSchoolFormValidate: addSchoolFormValidate,
    addCorporateFormValidate: addCorporateFormValidate
};
//# sourceMappingURL=forms.js.map