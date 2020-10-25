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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var typedi_1 = require("typedi");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var AuthService = /** @class */ (function () {
    function AuthService(userModel, sessionModel, reqPassModel, logger) {
        this.userModel = userModel;
        this.sessionModel = sessionModel;
        this.reqPassModel = reqPassModel;
        this.logger = logger;
    }
    AuthService.prototype.SignUp = function (userInputDTO) {
        return __awaiter(this, void 0, void 0, function () {
            var alreadyExist, userData, userRecord, token, user, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        this.logger.silly('Creating user db record');
                        return [4 /*yield*/, this.userModel.findOne({ "contact.email": userInputDTO.contact.email, isDeleted: false })];
                    case 1:
                        alreadyExist = _a.sent();
                        if (alreadyExist) {
                            throw new Error('Account already exist !');
                        }
                        userData = new this.userModel(userInputDTO);
                        return [4 /*yield*/, userData.save()];
                    case 2:
                        userRecord = _a.sent();
                        this.logger.silly('Generating JWT');
                        token = this.generateToken(userRecord);
                        if (!userRecord) {
                            throw new Error('User cannot be created');
                        }
                        user = userRecord.toObject();
                        Reflect.deleteProperty(user, 'password');
                        Reflect.deleteProperty(user, '__v');
                        return [2 /*return*/, { user: user, token: token }];
                    case 3:
                        e_1 = _a.sent();
                        // this.logger.error(e);
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.SignIn = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var userRecord, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userModel.findOne({ "contact.email": email, isDeleted: false })];
                    case 1:
                        userRecord = _a.sent();
                        if (!userRecord) {
                            throw new Error('User not registered');
                        }
                        if (userRecord.isDeleted) {
                            throw new Error('User is Deleted');
                        }
                        if (userRecord.isBlocked) {
                            throw new Error('User is Blocked');
                        }
                        return [4 /*yield*/, this.comparePassword(password, userRecord)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        throw e_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.ForgotPassword = function (email, token, url) {
        return __awaiter(this, void 0, void 0, function () {
            var userData, currentDate, reqPassData, reqPassRecord, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userModel.findOne({ 'contact.email': email })];
                    case 1:
                        userData = _a.sent();
                        currentDate = new Date();
                        currentDate.setTime(new Date().getTime() + 20 * 60 * 1000);
                        if (!userData) {
                            throw " User with " + email + " is not registered with us ! ";
                        }
                        reqPassData = new this.reqPassModel({ _user: userData._id, token: token, expiry: currentDate });
                        return [4 /*yield*/, reqPassData.save()
                            // send mail to given mail with this url ...
                        ];
                    case 2:
                        reqPassRecord = _a.sent();
                        // send mail to given mail with this url ...
                        return [2 /*return*/, reqPassRecord];
                    case 3:
                        e_3 = _a.sent();
                        throw e_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.ResetPassword = function (token, password) {
        return __awaiter(this, void 0, void 0, function () {
            var reqPassData, resetPass, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.reqPassModel.findOne({ token: token })];
                    case 1:
                        reqPassData = _a.sent();
                        if (reqPassData) {
                            throw 'No Request Found !';
                        }
                        if (reqPassData.expiry < new Date()) {
                            throw 'Invalid Url, please resend email to reset your password!';
                        }
                        return [4 /*yield*/, this.resetPassword(reqPassData._user, password)
                            // send mail to know user ... that pass is reset ...
                        ];
                    case 2:
                        resetPass = _a.sent();
                        // send mail to know user ... that pass is reset ...
                        return [2 /*return*/, resetPass];
                    case 3:
                        e_4 = _a.sent();
                        throw e_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.ChangePassword = function (authId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var userData, changePass, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.userModel.findOne({ _id: authId })];
                    case 1:
                        userData = _a.sent();
                        if (!userData) {
                            throw 'Request user not found !';
                        }
                        return [4 /*yield*/, this.changePassword(authId, userData.password, oldPassword, newPassword)];
                    case 2:
                        changePass = _a.sent();
                        if (!changePass) {
                            throw 'Old Password Does Not Match, Please try again.';
                        }
                        return [2 /*return*/, changePass];
                    case 3:
                        e_5 = _a.sent();
                        throw e_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.Logout = function (userId, deviceId) {
        return __awaiter(this, void 0, void 0, function () {
            var e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.sessionModel.findOneAndRemove({ _user: userId, deviceId: deviceId })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_6 = _a.sent();
                        throw e_6;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.comparePassword = function (password, userRecord) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            bcryptjs_1.default.compare(password, userRecord.password, function (err, status) {
                if (err) {
                    reject(err);
                }
                else {
                    if (!status) {
                        reject(new Error("Incorrect Password"));
                    }
                    _this.logger.silly('Generating JWT');
                    var token = _this.generateToken(userRecord);
                    var user = userRecord.toObject();
                    Reflect.deleteProperty(user, 'password');
                    resolve({ user: user, token: token });
                }
            });
        });
    };
    AuthService.prototype.resetPassword = function (userId, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            bcryptjs_1.default.hash(password, 8, function (err, hash) {
                if (err)
                    return reject(err);
                else {
                    _this.userModel.findOneAndUpdate({ _id: userId }, { password: hash }, { new: true })
                        .then(resolve)
                        .catch(reject);
                }
            });
        });
    };
    AuthService.prototype.changePassword = function (userId, password, oldPassword, newPassword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            bcryptjs_1.default.compare(oldPassword, password, function (err, status) {
                if (err)
                    return reject(err);
                else {
                    if (!status)
                        return resolve(false);
                    else {
                        bcryptjs_1.default.hash(newPassword, 8, function (err, hash) {
                            if (err)
                                return reject(err);
                            else {
                                _this.userModel.findOneAndUpdate({ _id: userId }, { password: hash }, { new: true })
                                    .then(resolve)
                                    .catch(reject);
                            }
                        });
                    }
                }
            });
        });
    };
    AuthService.prototype.generateToken = function (user) {
        var today = new Date();
        var exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        this.logger.silly("Sign JWT for userId: " + user._id);
        return jsonwebtoken_1.default.sign({
            _id: user._id,
            role: user.role,
            name: user.name,
            contact: user.contact,
            isDeleted: user.isDeleted,
            isBlocked: user.isBlocked,
            exp: exp.getTime() / 1000,
        }, config_1.default.jwtSecret);
    };
    AuthService = __decorate([
        typedi_1.Service(),
        __param(0, typedi_1.Inject('userModel')),
        __param(1, typedi_1.Inject('sessionModel')),
        __param(2, typedi_1.Inject('reqPassModel')),
        __param(3, typedi_1.Inject('logger')),
        __metadata("design:paramtypes", [Object, Object, Object, Object])
    ], AuthService);
    return AuthService;
}());
exports.default = AuthService;
//# sourceMappingURL=auth.js.map