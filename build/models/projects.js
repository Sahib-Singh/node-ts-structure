"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var projectSchema = new mongoose_1.Schema({
    name: String,
    url: String,
    images: [String],
    desc: String,
    startDate: Date,
    state: {
        type: String,
        enum: ['OVER', 'ON_GOING', 'TO_BE_STARTED']
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
exports.default = mongoose_1.model('PROJECTS', projectSchema);
//# sourceMappingURL=projects.js.map