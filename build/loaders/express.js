"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var config_1 = __importDefault(require("../config"));
var apis_1 = __importDefault(require("../apis"));
var swagger_1 = __importDefault(require("../apis/swagger"));
exports.default = (function (_a) {
    var app = _a.app;
    app.get('/status', function (req, res) {
        res.status(200).end();
    });
    app.head('/status', function (req, res) {
        res.status(200).end();
    });
    app.enable('trust proxy');
    app.use(cors_1.default({ origin: true }));
    app.use(express_1.default.json({ limit: '50mb' }));
    app.use(express_1.default.urlencoded({ limit: '50mb' }));
    app.use(config_1.default.api.prefix, apis_1.default());
    app.use(config_1.default.swagger.prefix, swagger_1.default());
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    app.use(function (err, req, res, next) {
        /**
         * Handle 401 thrown by express-jwt library
         */
        if (err.name === 'UnauthorizedError') {
            return res
                .status(err.status)
                .send({ message: err.message })
                .end();
        }
        return next(err);
    });
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });
});
//# sourceMappingURL=express.js.map