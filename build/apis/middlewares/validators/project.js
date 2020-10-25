"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var addProjectValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        name: Joi.string().required(),
        url: Joi.string().required(),
        images: Joi.array().items(Joi.string()).min(1).required(),
        desc: Joi.string().required(),
        startDate: Joi.date().required(),
        state: Joi.string().valid('OVER', 'ON_GOING', 'TO_BE_STARTED').required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var putProjectValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        projectId: Joi.string().hex().required(),
        name: Joi.string().required(),
        url: Joi.string().required(),
        images: Joi.array().items(Joi.string()).min(1).required(),
        desc: Joi.string().required(),
        startDate: Joi.date().required(),
        state: Joi.string().valid('OVER', 'ON_GOING', 'TO_BE_STARTED').required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var patchProjectValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        projectId: Joi.string().hex().required(),
        isBlocked: Joi.boolean().required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var deleteProjectValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        ids: Joi.array().items(Joi.string().hex()).min(1).required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var getProjectValidate = function (req, res, next) {
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
    addProjectValidate: addProjectValidate,
    getProjectValidate: getProjectValidate,
    putProjectValidate: putProjectValidate,
    patchProjectValidate: patchProjectValidate,
    deleteProjectValidate: deleteProjectValidate
};
//# sourceMappingURL=project.js.map