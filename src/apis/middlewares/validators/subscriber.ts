import { NextFunction, Request, Response } from 'express';
const Joi = require('@hapi/joi')

const addSubscriberValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            email: Joi.string().email().required(),
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const putSubscriberValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            subscriberId: Joi.string().hex().required(),
            email: Joi.string().email().required(),
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const patchSubscriberValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            subscriberId: Joi.string().hex().required(),
            isBlocked: Joi.boolean().required()
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const deleteSubscriberValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            ids: Joi.array().items(Joi.string().hex()).min(1).required(),
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const getSubscriberValidate = (req: Request, res: Response, next: NextFunction) => {
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
    addSubscriberValidate,
    getSubscriberValidate,
    putSubscriberValidate,
    patchSubscriberValidate,
    deleteSubscriberValidate
};
