"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var forgotPasswordSchema = new mongoose_1.Schema({
    _user: mongoose_1.Types.ObjectId,
    token: String,
    expiry: Date
}, { timestamps: true });
exports.default = mongoose_1.model('FORGOT_PASSWORD_REQUEST', forgotPasswordSchema);
//# sourceMappingURL=passwordRequest.js.map