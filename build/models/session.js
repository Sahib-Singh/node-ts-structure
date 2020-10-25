"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var sessionSchema = new mongoose_1.Schema({
    _user: mongoose_1.Schema.Types.ObjectId,
    fcmToken: String,
    deviceId: String
});
exports.default = mongoose_1.model('SESSION', sessionSchema);
//# sourceMappingURL=session.js.map