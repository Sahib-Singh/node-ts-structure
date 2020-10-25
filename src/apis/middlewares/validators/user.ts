import { NextFunction, Request, Response } from 'express';
const Joi = require('@hapi/joi')

const addUserValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            name: Joi.object({
                firstName: Joi.string().alphanum().min(3).max(30).required(),
                lastName: Joi.string().alphanum().min(3).max(30).optional(),
            }).required(),

            contact: Joi.object({
                email: Joi.string().email().required(),
                phone: Joi.object().keys({
                    dialCode: Joi.number().required(),
                    iso2: Joi.string().required(),
                    country: Joi.string().required(),
                    number: Joi.number().required(),
                })
            }).required(),
            picture: Joi.string().required(),
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
            password: Joi.string().min(7).max(30).required(),
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const putUserValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            userId: Joi.string().hex().required(),
            name: Joi.object({
                firstName: Joi.string().alphanum().min(3).max(30).required(),
                lastName: Joi.string().alphanum().min(3).max(30).optional(),
            }).required(),
            picture: Joi.string().required(),
            contact: Joi.object({
                email: Joi.string().email().required(),
                phone: Joi.object().keys({
                    dialCode: Joi.number().required(),
                    iso2: Joi.string().required(),
                    country: Joi.string().required(),
                    number: Joi.number().required(),
                })
            }).required(),
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
            password: Joi.string().min(7).max(30).optional(),
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const patchUserValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            userId: Joi.string().hex().required(),
            isBlocked: Joi.boolean().required()
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const deleteUserValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            ids: Joi.array().items(Joi.string().hex()).min(1).required(),
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const getUserValidate = (req: Request, res: Response, next: NextFunction) => {
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
    addUserValidate,
    getUserValidate,
    putUserValidate,
    patchUserValidate,
    deleteUserValidate
};