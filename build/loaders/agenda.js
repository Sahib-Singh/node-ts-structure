"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var agenda_1 = __importDefault(require("agenda"));
var config_1 = __importDefault(require("../config"));
exports.default = (function (_a) {
    var mongoConnection = _a.mongoConnection;
    return new agenda_1.default({
        mongo: mongoConnection,
        db: { collection: config_1.default.agenda.dbCollection },
        processEvery: config_1.default.agenda.pooltime,
        maxConcurrency: config_1.default.agenda.concurrency,
    });
});
//# sourceMappingURL=agenda.js.map