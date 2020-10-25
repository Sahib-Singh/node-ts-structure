"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var addEventValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        title: Joi.string().required(),
        color: Joi.string().required(),
        decription: Joi.string().required(),
        picture: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var putEventValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        eventId: Joi.string().hex().required(),
        title: Joi.string().required(),
        color: Joi.string().required(),
        decription: Joi.string().required(),
        picture: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var patchEventValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        eventId: Joi.string().hex().required(),
        isBlocked: Joi.boolean().required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var deleteEventValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        ids: Joi.array().items(Joi.string().hex()).min(1).required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var getEventValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        pagination: Joi.string().required(),
        search: Joi.string().optional().allow(''),
        limit: Joi.string().optional(),
        page: Joi.string().required(),
        startDate: Joi.date().optional(),
        endDate: Joi.date().optional()
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
    addEventValidate: addEventValidate,
    getEventValidate: getEventValidate,
    putEventValidate: putEventValidate,
    patchEventValidate: patchEventValidate,
    deleteEventValidate: deleteEventValidate
};
//# sourceMappingURL=event.js.map