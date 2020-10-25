"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var addBlogValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        images: Joi.array().items(Joi.string()).min(1).required(),
        type: Joi.string().valid('BLOG', 'NEWS').required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var putBlogValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        blogId: Joi.string().hex().required(),
        title: Joi.string().required(),
        body: Joi.string().required(),
        images: Joi.array().items(Joi.string()).min(1).required(),
        type: Joi.string().valid('BLOG', 'NEWS').required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var patchBlogValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        blogId: Joi.string().hex().required(),
        isBlocked: Joi.boolean().required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var deleteBlogValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        ids: Joi.array().items(Joi.string().hex()).min(1).required(),
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var getBlogValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        pagination: Joi.string().required(),
        search: Joi.string().optional().allow(''),
        type: Joi.string().valid('BLOG', 'NEWS').required(),
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
    addBlogValidate: addBlogValidate,
    getBlogValidate: getBlogValidate,
    putBlogValidate: putBlogValidate,
    patchBlogValidate: patchBlogValidate,
    deleteBlogValidate: deleteBlogValidate
};
//# sourceMappingURL=blog.js.map