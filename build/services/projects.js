"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var typedi_1 = require("typedi");
var mongoose_1 = require("mongoose");
var AuthService = /** @class */ (function () {
    function AuthService(projectModel, logger) {
        this.projectModel = projectModel;
        this.logger = logger;
    }
    AuthService.prototype.addProject = function (projectInput) {
        return __awaiter(this, void 0, void 0, function () {
            var projectData, projectRecord, project, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Creating project db record');
                        projectData = new this.projectModel(projectInput);
                        return [4 /*yield*/, projectData.save()];
                    case 1:
                        projectRecord = _a.sent();
                        project = projectRecord.toObject();
                        Reflect.deleteProperty(project, '__v');
                        return [2 /*return*/, { project: project }];
                    case 2:
                        e_1 = _a.sent();
                        this.logger.error(e_1);
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getProjectWithPagination = function (search, limit, skip) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Get Projects with Pagination');
                        return [4 /*yield*/, this.projectModel.find(search, { __v: 0, password: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)];
                    case 1:
                        projects = _a.sent();
                        return [2 /*return*/, { projects: projects }];
                    case 2:
                        e_2 = _a.sent();
                        this.logger.error(e_2);
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.countProjects = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var count, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Count query');
                        return [4 /*yield*/, this.projectModel.countDocuments(search)];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, { count: count }];
                    case 2:
                        e_3 = _a.sent();
                        this.logger.error(e_3);
                        throw e_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getProjects = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Get Projects');
                        return [4 /*yield*/, this.projectModel.find(search, { __v: 0 }).sort({ createdAt: -1 })];
                    case 1:
                        projects = _a.sent();
                        return [2 /*return*/, { projects: projects }];
                    case 2:
                        e_4 = _a.sent();
                        this.logger.error(e_4);
                        throw e_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.updateProject = function (projectInput) {
        return __awaiter(this, void 0, void 0, function () {
            var project, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('update Single Project');
                        return [4 /*yield*/, this.projectModel.findOneAndUpdate({ _id: projectInput.projectId, isDeleted: false }, { $set: projectInput }, { new: true })];
                    case 1:
                        project = _a.sent();
                        return [2 /*return*/, { project: project }];
                    case 2:
                        e_5 = _a.sent();
                        this.logger.error(e_5);
                        throw e_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.deleteProject = function (Ids) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteData, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Deleting project');
                        return [4 /*yield*/, this.projectModel.updateMany({ _id: Ids.map(function (res) { return mongoose_1.Types.ObjectId(res); }), isDeleted: false }, { isDeleted: true })];
                    case 1:
                        deleteData = _a.sent();
                        return [2 /*return*/, { deleteData: deleteData }];
                    case 2:
                        e_6 = _a.sent();
                        this.logger.error(e_6);
                        throw e_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService = __decorate([
        typedi_1.Service(),
        __param(0, typedi_1.Inject('projectModel')),
        __param(1, typedi_1.Inject('logger')),
        __metadata("design:paramtypes", [Object, Object])
    ], AuthService);
    return AuthService;
}());
exports.default = AuthService;
//# sourceMappingURL=projects.js.map