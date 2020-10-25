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
// import { IIndividualInput, IIndividual } from '../interfaces/IIndividual';
var mongoose_1 = require("mongoose");
var FormService = /** @class */ (function () {
    function FormService(IndividualFormModel, SchoolFormModel, CorporateFormModel, logger) {
        this.IndividualFormModel = IndividualFormModel;
        this.SchoolFormModel = SchoolFormModel;
        this.CorporateFormModel = CorporateFormModel;
        this.logger = logger;
    }
    FormService.prototype.addIndividualForm = function (individualInput) {
        return __awaiter(this, void 0, void 0, function () {
            var individualData, individualRecord, individual, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Creating individual db record');
                        individualData = new this.IndividualFormModel(individualInput);
                        return [4 /*yield*/, individualData.save()];
                    case 1:
                        individualRecord = _a.sent();
                        individual = individualRecord.toObject();
                        Reflect.deleteProperty(individual, '__v');
                        return [2 /*return*/, { individual: individual }];
                    case 2:
                        e_1 = _a.sent();
                        this.logger.error(e_1);
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.getIndividualWithPagination = function (search, limit, skip) {
        return __awaiter(this, void 0, void 0, function () {
            var individuals, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Get Individuals with Pagination');
                        return [4 /*yield*/, this.IndividualFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)];
                    case 1:
                        individuals = _a.sent();
                        return [2 /*return*/, { individuals: individuals }];
                    case 2:
                        e_2 = _a.sent();
                        this.logger.error(e_2);
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.countIndividuals = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var count, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Count query');
                        return [4 /*yield*/, this.IndividualFormModel.countDocuments(search)];
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
    FormService.prototype.getIndividuals = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var individuals, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Get Individuals');
                        return [4 /*yield*/, this.IndividualFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 })];
                    case 1:
                        individuals = _a.sent();
                        return [2 /*return*/, { individuals: individuals }];
                    case 2:
                        e_4 = _a.sent();
                        this.logger.error(e_4);
                        throw e_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.deleteIndividual = function (Ids) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteData, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Deleting Individual');
                        return [4 /*yield*/, this.IndividualFormModel.updateMany({ _id: Ids.map(function (res) { return mongoose_1.Types.ObjectId(res); }), isDeleted: false }, { isDeleted: true })];
                    case 1:
                        deleteData = _a.sent();
                        return [2 /*return*/, { deleteData: deleteData }];
                    case 2:
                        e_5 = _a.sent();
                        this.logger.error(e_5);
                        throw e_5;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // School Form . .. .
    FormService.prototype.addSchoolForm = function (schoolInput) {
        return __awaiter(this, void 0, void 0, function () {
            var schoolData, schoolRecord, school, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Creating school db record');
                        schoolData = new this.SchoolFormModel(schoolInput);
                        return [4 /*yield*/, schoolData.save()];
                    case 1:
                        schoolRecord = _a.sent();
                        school = schoolRecord.toObject();
                        Reflect.deleteProperty(school, '__v');
                        return [2 /*return*/, { school: school }];
                    case 2:
                        e_6 = _a.sent();
                        this.logger.error(e_6);
                        throw e_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.getSchoolWithPagination = function (search, limit, skip) {
        return __awaiter(this, void 0, void 0, function () {
            var schools, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Get Schools with Pagination');
                        return [4 /*yield*/, this.SchoolFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)];
                    case 1:
                        schools = _a.sent();
                        return [2 /*return*/, { schools: schools }];
                    case 2:
                        e_7 = _a.sent();
                        this.logger.error(e_7);
                        throw e_7;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.countSchools = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var count, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Count query');
                        return [4 /*yield*/, this.SchoolFormModel.countDocuments(search)];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, { count: count }];
                    case 2:
                        e_8 = _a.sent();
                        this.logger.error(e_8);
                        throw e_8;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.getSchools = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var schools, e_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Get Schools');
                        return [4 /*yield*/, this.SchoolFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 })];
                    case 1:
                        schools = _a.sent();
                        return [2 /*return*/, { schools: schools }];
                    case 2:
                        e_9 = _a.sent();
                        this.logger.error(e_9);
                        throw e_9;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.deleteSchool = function (Ids) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteData, e_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Deleting School');
                        return [4 /*yield*/, this.SchoolFormModel.updateMany({ _id: Ids.map(function (res) { return mongoose_1.Types.ObjectId(res); }), isDeleted: false }, { isDeleted: true })];
                    case 1:
                        deleteData = _a.sent();
                        return [2 /*return*/, { deleteData: deleteData }];
                    case 2:
                        e_10 = _a.sent();
                        this.logger.error(e_10);
                        throw e_10;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Corporate Form . . .
    FormService.prototype.addCorporateForm = function (CorporateInput) {
        return __awaiter(this, void 0, void 0, function () {
            var CorporateData, CorporateRecord, Corporate, e_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Creating Corporate db record');
                        CorporateData = new this.CorporateFormModel(CorporateInput);
                        return [4 /*yield*/, CorporateData.save()];
                    case 1:
                        CorporateRecord = _a.sent();
                        Corporate = CorporateRecord.toObject();
                        Reflect.deleteProperty(Corporate, '__v');
                        return [2 /*return*/, { Corporate: Corporate }];
                    case 2:
                        e_11 = _a.sent();
                        this.logger.error(e_11);
                        throw e_11;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.getCorporateWithPagination = function (search, limit, skip) {
        return __awaiter(this, void 0, void 0, function () {
            var corporates, e_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Get Corporates with Pagination');
                        return [4 /*yield*/, this.CorporateFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 }).skip(skip).limit(limit)];
                    case 1:
                        corporates = _a.sent();
                        return [2 /*return*/, { corporates: corporates }];
                    case 2:
                        e_12 = _a.sent();
                        this.logger.error(e_12);
                        throw e_12;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.countCorporates = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var count, e_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Count query');
                        return [4 /*yield*/, this.CorporateFormModel.countDocuments(search)];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, { count: count }];
                    case 2:
                        e_13 = _a.sent();
                        this.logger.error(e_13);
                        throw e_13;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.getCorporates = function (search) {
        return __awaiter(this, void 0, void 0, function () {
            var corporates, e_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Get Corporates');
                        return [4 /*yield*/, this.CorporateFormModel.find(search, { __v: 0 }).sort({ createdAt: -1 })];
                    case 1:
                        corporates = _a.sent();
                        return [2 /*return*/, { corporates: corporates }];
                    case 2:
                        e_14 = _a.sent();
                        this.logger.error(e_14);
                        throw e_14;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService.prototype.deleteCorporate = function (Ids) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteData, e_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.logger.silly('Deleting Corporate');
                        return [4 /*yield*/, this.CorporateFormModel.updateMany({ _id: Ids.map(function (res) { return mongoose_1.Types.ObjectId(res); }), isDeleted: false }, { isDeleted: true })];
                    case 1:
                        deleteData = _a.sent();
                        return [2 /*return*/, { deleteData: deleteData }];
                    case 2:
                        e_15 = _a.sent();
                        this.logger.error(e_15);
                        throw e_15;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormService = __decorate([
        typedi_1.Service(),
        __param(0, typedi_1.Inject('IndividualFormModel')),
        __param(1, typedi_1.Inject('SchoolFormModel')),
        __param(2, typedi_1.Inject('CorporateFormModel')),
        __param(3, typedi_1.Inject('logger')),
        __metadata("design:paramtypes", [Object, Object, Object, Object])
    ], FormService);
    return FormService;
}());
exports.default = FormService;
//# sourceMappingURL=forms.js.map