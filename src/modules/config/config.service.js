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
exports.__esModule = true;
var errors_1 = require("../../constants/errors");
var instance;
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        var _this = this;
        this.appConfig = function () {
            return _this.configs;
        };
        this.getMongoConfig = function () {
            if (!_this.configs.mongo) {
                throw new Error(errors_1.NO_MONGO_CONFIGURATION);
            }
            return _this.configs.mongo;
        };
        this.getWebServerConfig = function () {
            if (!_this.configs.webServer) {
                throw new Error(errors_1.NO_WEBSERVER_CONFIGURATION);
            }
            return _this.configs.webServer;
        };
        this.isDevEnv = function () {
            var _a;
            return ((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'development';
        };
        this.isProdEnv = function () {
            var _a;
            return ((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'production';
        };
        this.isTestEnv = function () {
            var _a;
            return ((_a = process.env.CONFIG_DIR) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'test';
        };
        this.getJwtSecret = function () {
            if (!_this.configs.jwtSecret) {
                throw new Error(errors_1.NO_JWT_SECRET);
            }
            return _this.configs.jwtSecret;
        };
        this.readConfigFile = function (pathToFile) {
            try {
                return require(pathToFile);
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        };
        this.setAppConfig = function () {
            var defaultConfig = _this.readConfigFile('../../../configs/appConfig.json');
            if (!process.env.CONFIG_DIR) {
                return defaultConfig;
            }
            var customConfig = _this.readConfigFile("../../../../configs/" + process.env.CONFIG_DIR + "/appConfig.json");
            return __assign(__assign({}, defaultConfig), customConfig);
        };
        if (instance) {
            return instance;
        }
        instance = this;
        this.configs = this.setAppConfig();
    }
    return ConfigService;
}());
exports["default"] = new ConfigService();
