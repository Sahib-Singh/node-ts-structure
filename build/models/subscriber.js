"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var subscriberSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose_1.model('SUBSCRIBER', subscriberSchema);
//# sourceMappingURL=subscriber.js.map