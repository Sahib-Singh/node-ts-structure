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
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var common_1 = require("../../services/common");
var route = express_1.Router();
exports.default = (function (app) {
    app.use('/gateway', route);
    route.get("/", common_1.verifyToken, function (req, res) {
        try {
            if (req.user.isDeleted) {
                return res
                    .status(401)
                    .json({
                    status: false,
                    data: null,
                    message: "Deleted by admin, please contact support",
                });
            }
            else if (req.user.isBlocked) {
                return res.status(401).json({
                    status: false,
                    data: null,
                    message: "Blocked by admin, contact support",
                });
            }
            else {
                res.set("user", JSON.stringify(__assign({}, req.user)));
                return res.status(200).send({
                    status: true,
                    data: req.user,
                    message: "success",
                });
            }
        }
        catch (error) {
            return res.status(400).send({
                status: false,
                data: null,
                message: error.message,
            });
        }
    });
});
//# sourceMappingURL=gateway.js.map