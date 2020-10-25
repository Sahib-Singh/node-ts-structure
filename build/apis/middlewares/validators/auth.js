"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require('@hapi/joi');
var loginValidate = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error;
    return __generator(this, function (_a) {
        error = Joi.object()
            .keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            fcmToken: Joi.string().required(),
            deviceId: Joi.string().required()
        })
            .validate(req.body).error;
        if (error)
            return [2 /*return*/, returnResponse(res, error.details[0].message)];
        next();
        return [2 /*return*/];
    });
}); };
var signupValidate = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error;
    return __generator(this, function (_a) {
        error = Joi.object()
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
            .validate(req.body).error;
        if (error)
            return [2 /*return*/, returnResponse(res, error.details[0].message)];
        next();
        return [2 /*return*/];
    });
}); };
var passwordValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        oldPassword: Joi.string().required(),
        newPassword: Joi.string().required().min(6).max(30)
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var forgotPasswordValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        email: Joi.string().email().required()
    })
        .validate(req.body).error;
    if (error)
        return returnResponse(res, error.details[0].message);
    next();
};
var resetPasswordValidate = function (req, res, next) {
    var error = Joi.object()
        .keys({
        token: Joi.string().required(),
        password: Joi.string().required()
    })
        .validate(req.body).error;
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
    loginValidate: loginValidate,
    signupValidate: signupValidate,
    passwordValidate: passwordValidate,
    forgotPasswordValidate: forgotPasswordValidate,
    resetPasswordValidate: resetPasswordValidate
};
//# sourceMappingURL=auth.js.map