import { NextFunction, Request, Response } from 'express';
const Joi = require('@hapi/joi')

const addQueryValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
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
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const putQueryValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
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
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const patchQueryValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            queryId: Joi.string().hex().required(),
            isBlocked: Joi.boolean().required()
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const deleteQueryValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            ids: Joi.array().items(Joi.string().hex()).min(1).required(),
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const getQueryValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            pagination: Joi.string().required(),
            search: Joi.string().optional().allow(''),
            limit: Joi.string().optional(),
            page: Joi.string().required()
        })
        .validate(req.query)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}

function returnResponse(res: Response, error: Error) {
    return res.status(400).json({
        status: false,
        message: error,
        data: null
    })
}


export default {
    addQueryValidate,
    getQueryValidate,
    putQueryValidate,
    patchQueryValidate,
    deleteQueryValidate
};
