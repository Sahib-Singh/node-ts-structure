import { NextFunction, Request, Response } from 'express';
const Joi = require('@hapi/joi')

const addProjectValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            name: Joi.string().required(),
            url: Joi.string().required(),
            images: Joi.array().items(Joi.string()).min(1).required(),
            desc: Joi.string().required(),
            startDate: Joi.date().required(),
            state: Joi.string().valid('OVER', 'ON_GOING', 'TO_BE_STARTED').required()
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const putProjectValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            projectId: Joi.string().hex().required(),
            name: Joi.string().required(),
            url: Joi.string().required(),
            images: Joi.array().items(Joi.string()).min(1).required(),
            desc: Joi.string().required(),
            startDate: Joi.date().required(),
            state: Joi.string().valid('OVER', 'ON_GOING', 'TO_BE_STARTED').required()
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const patchProjectValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            projectId: Joi.string().hex().required(),
            isBlocked: Joi.boolean().required()
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const deleteProjectValidate = (req: Request, res: Response, next: NextFunction) => {
    let { error } = Joi.object()
        .keys({
            ids: Joi.array().items(Joi.string().hex()).min(1).required(),
        })
        .validate(req.body)
    if (error) return returnResponse(res, error.details[0].message)
    next()
}
const getProjectValidate = (req: Request, res: Response, next: NextFunction) => {
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
    addProjectValidate,
    getProjectValidate,
    putProjectValidate,
    patchProjectValidate,
    deleteProjectValidate
};
