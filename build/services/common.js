"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var verifyToken = function (req, res, next) {
    try {
        console.log(req.headers, "this is req . .  .");
        if (!req.headers.authorization && !req.query.access_token && !req.body.access_token) {
            throw new Error('Unauthorized apis');
        }
        var authorization = req.headers.authorization;
        var token = authorization
            ? authorization.split(' ')[1]
            : (req.query.access_token || req.body.access_token);
        if (!token) {
            throw new Error('Unauthorized api');
        }
        jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret, function (err, decoded) {
            if (err) {
                throw new Error(err.message);
            }
            req.user = __assign({}, decoded);
        });
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            status: false,
            data: null,
            message: error.message,
        });
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=common.js.map