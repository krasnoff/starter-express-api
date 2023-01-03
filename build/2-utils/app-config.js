"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.port = 4000;
        this.connectionString = "mongodb://127.0.0.1:27017/northwind";
    }
    return AppConfig;
}());
var DevelopmentConfig = /** @class */ (function (_super) {
    __extends(DevelopmentConfig, _super);
    function DevelopmentConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDevelopment = true;
        _this.port = 4000;
        _this.connectionString = "mongodb://127.0.0.1:27017/northwind";
        _this.frontendUrl = "http://localhost:3000";
        return _this;
    }
    return DevelopmentConfig;
}(AppConfig));
var ProductionConfig = /** @class */ (function (_super) {
    __extends(ProductionConfig, _super);
    function ProductionConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDevelopment = false;
        _this.port = 4000;
        _this.connectionString = "mongodb://127.0.0.1:27017/northwind";
        _this.frontendUrl = "http://localhost:3000";
        return _this;
    }
    return ProductionConfig;
}(AppConfig));
// Must check in production: 
var appConfig = (process.env.NODE_ENV === "production") ? new ProductionConfig() : new DevelopmentConfig();
exports.default = appConfig;
