"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var addQueryValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        name: Joi.object({
            firstName: Joi.string().alphanum().min(3).max(30).required(),
            lastName: Joi.string().alphanum().min(3).max(30).required(),
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
        occupation: Joi.string().required(),
        message: Joi.string().required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var putQueryValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        queryId: Joi.string().hex().required(),
        name: Joi.object({
            firstName: Joi.string().alphanum().min(3).max(30).required(),
            lastName: Joi.string().alphanum().min(3).max(30).required(),
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
        occupation: Joi.string().required(),
        message: Joi.string().required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var patchQueryValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        queryId: Joi.string().hex().required(),
        isBlocked: Joi.boolean().required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var deleteQueryValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        ids: Joi.array().items(Joi.string().hex()).min(1).required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var getQueryValidate = function (req, res, next) {
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
function returnResponse(res, error) {
    return res.status(400).json({
        status: false,
        message: error,
        data: null
    });
}
exports.default = {
    addQueryValidate: addQueryValidate,
    getQueryValidate: getQueryValidate,
    putQueryValidate: putQueryValidate,
    patchQueryValidate: patchQueryValidate,
    deleteQueryValidate: deleteQueryValidate
};
//# sourceMappingURL=query.js.map