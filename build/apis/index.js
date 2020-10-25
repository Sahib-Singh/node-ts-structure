"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = __importDefault(require("./routes/user"));
var auth_1 = __importDefault(require("./routes/auth"));
var subscriber_1 = __importDefault(require("./routes/subscriber"));
var blog_1 = __importDefault(require("./routes/blog"));
var query_1 = __importDefault(require("./routes/query"));
var projects_1 = __importDefault(require("./routes/projects"));
var website_1 = __importDefault(require("./routes/website"));
var gateway_1 = __importDefault(require("./routes/gateway"));
var settings_1 = __importDefault(require("./routes/settings"));
var member_1 = __importDefault(require("./routes/member"));
var forms_1 = __importDefault(require("./routes/forms"));
var events_1 = __importDefault(require("./routes/events"));
exports.default = (function () {
    var app = express_1.Router();
    user_1.default(app);
    auth_1.default(app);
    subscriber_1.default(app);
    blog_1.default(app);
    query_1.default(app);
    projects_1.default(app);
    website_1.default(app);
    settings_1.default(app);
    member_1.default(app);
    forms_1.default(app);
    events_1.default(app);
    gateway_1.default(app);
    return app;
});
//# sourceMappingURL=index.js.map