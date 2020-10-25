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
var auth_1 = __importDefault(require("./auth"));
var verify_1 = __importDefault(require("./verify"));
var project_1 = __importDefault(require("./project"));
var blog_1 = __importDefault(require("./blog"));
var query_1 = __importDefault(require("./query"));
var subscriber_1 = __importDefault(require("./subscriber"));
var user_1 = __importDefault(require("./user"));
var settings_1 = __importDefault(require("./settings"));
var forms_1 = __importDefault(require("./forms"));
var event_1 = __importDefault(require("./event"));
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, auth_1.default), verify_1.default), project_1.default), blog_1.default), query_1.default), subscriber_1.default), user_1.default), settings_1.default), forms_1.default), event_1.default);
//# sourceMappingURL=index.js.map