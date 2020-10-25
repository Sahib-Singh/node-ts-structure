import { NextFunction, Request, Response } from 'express';
const Joi = require('@hapi/joi')

const loginValidate = async (req: Request, res: Response, next: NextFunction) => {

  let { error } = Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      fcmToken: Joi.string().required(),
      deviceId: Joi.string().required()
    })
    .validate(req.body)

  if (error) return returnResponse(res, error.details[0].message)
  next()
}

const signupValidate = async (req: Request, res: Response, next: NextFunction) => {

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
      role: Joi.string().required().valid('ADMIN', 'SUB-ADMIN'),
    })
    .validate(req.body)

  if (error) return returnResponse(res, error.details[0].message)
  next()
}


const passwordValidate = (req: Request, res: Response, next: NextFunction) => {
  let { error } = Joi.object()
    .keys({
      oldPassword: Joi.string().required(),
      newPassword: Joi.string().required().min(6).max(30)
    })
    .validate(req.body)
  if (error) return returnResponse(res, error.details[0].message)
  next()
}

const forgotPasswordValidate = (req: Request, res: Response, next: NextFunction) => {
  let { error } = Joi.object()
    .keys({
      email: Joi.string().email().required()
    })
    .validate(req.body)
  if (error) return returnResponse(res, error.details[0].message)
  next()
}

const resetPasswordValidate = (req: Request, res: Response, next: NextFunction) => {
  let { error } = Joi.object()
    .keys({
      token: Joi.string().required(),
      password: Joi.string().required()
    })
    .validate(req.body)
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
  loginValidate,
  signupValidate,
  passwordValidate,
  forgotPasswordValidate,
  resetPasswordValidate
};
