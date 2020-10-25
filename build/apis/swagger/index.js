"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var config_1 = __importDefault(require("../../config"));
exports.default = (function () {
    var app = express_1.Router();
    if (config_1.default.nodeEnv == 'development') {
        var swaggerJSDoc = require('swagger-jsdoc');
        var swaggerUi = require('swagger-ui-express');
        var options = {
            definition: {
                info: {
                    title: "Authentication Service",
                    version: '1.0.0',
                },
                basePath: '/api'
            },
            apis: [
                './apis/swagger/auth/swagger.js',
                './apis/swagger/subscriber/swagger.js',
                './apis/swagger/query/swagger.js',
                './apis/swagger/project/swagger.js',
                './apis/swagger/blog/swagger.js',
                './apis/swagger/website/swagger.js',
                './apis/swagger/settings/swagger.js',
                './apis/swagger/member/swagger.js',
                './apis/swagger/forms/swagger.js',
                './apis/swagger/event/swagger.js'
            ]
        };
        var swaggerSpec = swaggerJSDoc(options);
        app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
            customCss: '.swagger-ui .topbar { display: none }'
        }));
    }
    return app;
});
//# sourceMappingURL=index.js.map