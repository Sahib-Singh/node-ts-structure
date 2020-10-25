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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var typedi_1 = require("typedi");
var projects_1 = __importDefault(require("../../services/projects"));
var validators_1 = __importDefault(require("../middlewares/validators"));
var route = express_1.Router();
exports.default = (function (app) {
    app.use('/project', route);
    route.get('/', validators_1.default.getXuser, validators_1.default.getProjectValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, _a, pagination, search, projectServiceInstance, limit, page, regex, look, projects, count, projects, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    _a = req.query, pagination = _a.pagination, search = _a.search;
                    projectServiceInstance = typedi_1.Container.get(projects_1.default);
                    limit = parseInt(req.query.limit ? req.query.limit : '10');
                    page = parseInt(req.query.page);
                    logger.warn(pagination);
                    regex = new RegExp("" + (search ? search : ''), 'gi');
                    look = { 'name': regex, isDeleted: false };
                    if (!JSON.parse(pagination)) return [3 /*break*/, 4];
                    return [4 /*yield*/, projectServiceInstance.getProjectWithPagination(look, limit, (page - 1) * limit)];
                case 2:
                    projects = (_b.sent()).projects;
                    return [4 /*yield*/, projectServiceInstance.countProjects(look)];
                case 3:
                    count = (_b.sent()).count;
                    logger.silly(count, "this is count . . . .");
                    logger.silly(limit, "this is limit . . . .");
                    return [2 /*return*/, res.status(200).json({
                            status: !!projects.length,
                            message: 'Fetched Successfully !',
                            data: { projects: projects },
                            totalDocuments: count,
                            currentPage: page,
                            totalPages: Math.ceil(count / limit)
                        })];
                case 4: return [4 /*yield*/, projectServiceInstance.getProjects(look)];
                case 5:
                    projects = (_b.sent()).projects;
                    return [2 /*return*/, res.status(200).json({
                            status: !!projects.length,
                            message: 'Fetched Successfully !',
                            data: { projects: projects },
                        })];
                case 6: return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    logger.error('🔥 error: %o', e_1);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_1.message })];
                case 8: return [2 /*return*/];
            }
        });
    }); });
    route.post('/', validators_1.default.getXuser, validators_1.default.addProjectValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, projectServiceInstance, project, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    projectServiceInstance = typedi_1.Container.get(projects_1.default);
                    return [4 /*yield*/, projectServiceInstance.addProject(__assign({}, req.body))];
                case 2:
                    project = (_a.sent()).project;
                    return [2 /*return*/, res.status(201).json({
                            status: true,
                            message: 'Created Successfully !',
                            data: project,
                        })];
                case 3:
                    e_2 = _a.sent();
                    logger.error('🔥 error: %o', e_2);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_2.message })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    route.put('/', validators_1.default.getXuser, validators_1.default.putProjectValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, projectServiceInstance, project, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    projectServiceInstance = typedi_1.Container.get(projects_1.default);
                    return [4 /*yield*/, projectServiceInstance.updateProject(req.body)];
                case 2:
                    project = (_a.sent()).project;
                    return [2 /*return*/, res.status(200).json({
                            status: true,
                            message: 'Updated Successfully !',
                            data: project,
                        })];
                case 3:
                    e_3 = _a.sent();
                    logger.error('🔥 error: %o', e_3);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_3.message })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    route.patch('/', validators_1.default.getXuser, validators_1.default.patchProjectValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, projectServiceInstance, project, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    projectServiceInstance = typedi_1.Container.get(projects_1.default);
                    return [4 /*yield*/, projectServiceInstance.updateProject(req.body)];
                case 2:
                    project = (_a.sent()).project;
                    return [2 /*return*/, res.status(200).json({
                            status: true,
                            message: 'Updated Successfully !',
                            data: project,
                        })];
                case 3:
                    e_4 = _a.sent();
                    logger.error('🔥 error: %o', e_4);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_4.message })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    route.delete('/', validators_1.default.getXuser, validators_1.default.deleteProjectValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, projectServiceInstance, deleteData, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    projectServiceInstance = typedi_1.Container.get(projects_1.default);
                    return [4 /*yield*/, projectServiceInstance.deleteProject(req.body.ids)];
                case 2:
                    deleteData = (_a.sent()).deleteData;
                    return [2 /*return*/, res.status(200).json({
                            status: true,
                            message: 'Deleted Successfully !',
                            data: deleteData,
                        })];
                case 3:
                    e_5 = _a.sent();
                    logger.error('🔥 error: %o', e_5);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_5.message })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=projects.js.map