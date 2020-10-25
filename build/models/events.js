"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var eventSchema = new mongoose_1.Schema({
    _user: { type: mongoose_1.Types.ObjectId, ref: 'USER' },
    title: String,
    color: String,
    decription: String,
    picture: String,
    startDate: Date,
    endDate: Date,
    isBlocked: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose_1.model('EVENT', eventSchema);
//# sourceMappingURL=events.js.map