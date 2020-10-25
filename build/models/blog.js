"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var blogSchema = new mongoose_1.Schema({
    _user: { type: mongoose_1.Types.ObjectId, ref: 'USER' },
    title: String,
    body: String,
    type: {
        type: String,
        enum: ['BLOG', 'NEWS']
    },
    images: [String],
    isBlocked: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.default = mongoose_1.model('BLOG', blogSchema);
//# sourceMappingURL=blog.js.map