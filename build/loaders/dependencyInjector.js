"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var loggers_1 = __importDefault(require("./loggers"));
var agenda_1 = __importDefault(require("./agenda"));
exports.default = (function (_a) {
    var mongoConnection = _a.mongoConnection, models = _a.models;
    try {
        models.forEach(function (m) {
            typedi_1.Container.set(m.name, m.model);
        });
        var agendaInstance = agenda_1.default({ mongoConnection: mongoConnection });
        typedi_1.Container.set('agendaInstance', agendaInstance);
        typedi_1.Container.set('logger', loggers_1.default);
        // Container.set('emailClient', mailgun({ apiKey: config.emails.apiKey, domain: config.emails.domain }))
        loggers_1.default.info('✌️ Agenda injected into container');
        return { agenda: agendaInstance };
    }
    catch (e) {
        loggers_1.default.error('🔥 Error on dependency injector loader: %o', e);
        throw e;
    }
});
//# sourceMappingURL=dependencyInjector.js.map