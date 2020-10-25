"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var addSubscriberValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        email: Joi.string().email().required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var putSubscriberValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        subscriberId: Joi.string().hex().required(),
        email: Joi.string().email().required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var patchSubscriberValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        subscriberId: Joi.string().hex().required(),
        isBlocked: Joi.boolean().required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var deleteSubscriberValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        ids: Joi.array().items(Joi.string().hex()).min(1).required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var getSubscriberValidate = function (req, res, next) {
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
    addSubscriberValidate: addSubscriberValidate,
    getSubscriberValidate: getSubscriberValidate,
    putSubscriberValidate: putSubscriberValidate,
    patchSubscriberValidate: patchSubscriberValidate,
    deleteSubscriberValidate: deleteSubscriberValidate
};
//# sourceMappingURL=subscriber.js.map