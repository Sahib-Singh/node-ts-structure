"use strict";
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
var auth_1 = __importDefault(require("../../services/auth"));
var validators_1 = __importDefault(require("../middlewares/validators"));
var crypto_js_1 = __importDefault(require("crypto-js"));
var router = express_1.Router();
exports.default = (function (app) {
    app.use('/auth', router);
    router.route("/signup")
        .post(validators_1.default.signupValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, authServiceInstance, _a, user, token, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    logger.debug('Calling Sign-Up endpoint with body: %o', req.body);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    authServiceInstance = typedi_1.Container.get(auth_1.default);
                    return [4 /*yield*/, authServiceInstance.SignUp(req.body)];
                case 2:
                    _a = _b.sent(), user = _a.user, token = _a.token;
                    return [2 /*return*/, res.status(201).json({ status: true, message: 'Logined Successfully !', data: { user: user, token: token } })];
                case 3:
                    e_1 = _b.sent();
                    logger.error('🔥 error: %o', e_1);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_1.message, data: {} })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    router.route("/login")
        .post(validators_1.default.loginValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, _a, email, password, authServiceInstance, _b, user, token, e_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    logger.debug('Calling Login endpoint with body: %o', req.body);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    _a = req.body, email = _a.email, password = _a.password;
                    authServiceInstance = typedi_1.Container.get(auth_1.default);
                    return [4 /*yield*/, authServiceInstance.SignIn(email, password)];
                case 2:
                    _b = _c.sent(), user = _b.user, token = _b.token;
                    return [2 /*return*/, res.status(200).json({ status: true, message: 'Logined Successfully !', data: { user: user, token: token } })];
                case 3:
                    e_2 = _c.sent();
                    logger.error('🔥 error: %o', e_2);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_2.message, data: {} })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    router.route('/forgot-password')
        .post(validators_1.default.forgotPasswordValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, email, authServiceInstance, token, url, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    email = req.body.email;
                    authServiceInstance = typedi_1.Container.get(auth_1.default);
                    token = crypto_js_1.default.AES.encrypt(req.body.email + Date.now(), process.env.CRYPTOKEY);
                    url = req.get('origin') + "/auth/reset-password?token=" + encodeURIComponent(token.toString());
                    logger.debug('Calling forgot-password endpoint with body: %o', url);
                    return [4 /*yield*/, authServiceInstance.ForgotPassword(email, token, url)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).send({
                            status: true,
                            message: 'Your Reset Password has been generated and send it to your mailID',
                            data: {}
                        })];
                case 3:
                    e_3 = _a.sent();
                    logger.error('🔥 error: %o', e_3);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_3.message, data: {} })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    router.route('/reset-password')
        .put(validators_1.default.resetPasswordValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, _a, token, password, authServiceInstance, e_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = req.body, token = _a.token, password = _a.password;
                    authServiceInstance = typedi_1.Container.get(auth_1.default);
                    logger.debug('Calling reset-password endpoint with body: %o', req.body);
                    return [4 /*yield*/, authServiceInstance.ResetPassword(token, password)];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.status(200).json({
                            status: true,
                            message: 'Your Reset Password has been generated and send it to your mailID',
                            data: {}
                        })];
                case 3:
                    e_4 = _b.sent();
                    logger.error('🔥 error: %o', e_4);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_4.message, data: {} })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    app.use('/user', router);
    router.route('/change-password')
        .post(validators_1.default.getXuser, validators_1.default.passwordValidate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, _a, oldPassword, newPassword, authServiceInstance, e_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = req.body, oldPassword = _a.oldPassword, newPassword = _a.newPassword;
                    authServiceInstance = typedi_1.Container.get(auth_1.default);
                    logger.debug('Calling reset-password endpoint with body: %o', req.body);
                    return [4 /*yield*/, authServiceInstance.ChangePassword(req.user._auth, oldPassword, newPassword)];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.status(200).send({
                            status: true,
                            message: 'Password Change Successfully !',
                            data: null
                        })];
                case 3:
                    e_5 = _b.sent();
                    logger.error('🔥 error: %o', e_5);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_5.message })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    router.route("/logout")
        .post(validators_1.default.getXuser, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var logger, authServiceInstance, session, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = typedi_1.Container.get('logger');
                    logger.debug('Calling Login endpoint with body: %o', req.user._id, req.body);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    authServiceInstance = typedi_1.Container.get(auth_1.default);
                    return [4 /*yield*/, authServiceInstance.Logout(req.user._id, req.body.deviceId)];
                case 2:
                    session = _a.sent();
                    return [2 /*return*/, res.status(200).send({
                            status: !!session,
                            message: session ? 'Logout Successfully' : 'Session not found',
                            data: session
                        })];
                case 3:
                    e_6 = _a.sent();
                    logger.error('🔥 error: %o', e_6);
                    return [2 /*return*/, res.status(400).json({ status: false, message: e_6.message })];
                case 4: return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=auth.js.map