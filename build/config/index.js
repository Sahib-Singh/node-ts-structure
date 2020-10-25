"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error(" Unable to find .env file !!!");
}
var envData = envFound.parsed;
exports.default = {
    nodeEnv: envData.NODE_ENV,
    port: parseInt(envData.PORT, 10),
    databaseURL: envData.MONGODB_URI,
    api: {
        prefix: '/api',
    },
    swagger: {
        prefix: '/swagger',
    },
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    jwtSecret: process.env.JWT_SECRET,
    agenda: {
        dbCollection: process.env.AGENDA_DB_COLLECTION,
        pooltime: process.env.AGENDA_POOL_TIME,
        concurrency: parseInt(String(process.env.AGENDA_CONCURRENCY), 10),
    },
};
//# sourceMappingURL=index.js.map