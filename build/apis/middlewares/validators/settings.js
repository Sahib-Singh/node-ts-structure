"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var addSettingsValidate = function (req, res, next) {
    var error = Joi.object().keys({
        name: Joi.string().optional(),
        address: Joi.object({
            region: Joi.string().allow('').optional(),
            country: Joi.string().allow('').optional(),
            locality: Joi.string().allow('').optional(),
            postalCode: Joi.string().allow('').optional(),
            subLocality: Joi.string().allow('').optional(),
            streetAddress: Joi.string().allow('').optional(),
            formattedAddress: Joi.string().allow('').required(),
            geo: Joi.array().items(Joi.number()).min(2).optional(),
        }).optional(),
        contact: Joi.object().keys({
            email: Joi.string().email().required(),
            phone: Joi.object().keys({
                dialCode: Joi.number().optional(),
                iso2: Joi.string().allow('').optional(),
                country: Joi.string().allow('').optional(),
                number: Joi.number().required(),
            })
        }),
        privacyPolicy: Joi.object({
            title: Joi.string().required().valid('PRIVACY_POLICY'),
            value: Joi.string().required(),
            description: Joi.string().optional(),
            url: Joi.string().optional()
        }),
        termsAndCondition: Joi.object({
            title: Joi.string().required().valid('TERMS_AND_CONDITIONS'),
            value: Joi.string().required(),
            description: Joi.string().optional(),
            url: Joi.string().optional()
        }),
        others: Joi.array().items(Joi.object({
            title: Joi.string().optional(),
            value: Joi.string().optional(),
            description: Joi.string().optional()
        })).optional().min(1),
        founder: Joi.array().optional(),
        foundingDate: Joi.string().optional(),
        logo: Joi.array().optional(),
        links: Joi.array().items(Joi.object({
            title: Joi.string().optional(),
            value: Joi.string().optional(),
            description: Joi.string().optional()
        })).optional().min(1),
    }).validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    else
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
    addSettingsValidate: addSettingsValidate
};
//# sourceMappingURL=settings.js.map