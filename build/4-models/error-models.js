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
exports.UnauthorizedError = exports.ValidationError = exports.RouteNotFoundError = exports.ResourceNotFoundError = void 0;
var ClientError = /** @class */ (function () {
    function ClientError(message, status) {
        this.message = message;
        this.status = status;
    }
    return ClientError;
}());
var ResourceNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError(_id) {
        return _super.call(this, "_id ".concat(_id, " not found"), 404) || this;
    }
    return ResourceNotFoundError;
}(ClientError));
exports.ResourceNotFoundError = ResourceNotFoundError;
var RouteNotFoundError = /** @class */ (function (_super) {
    __extends(RouteNotFoundError, _super);
    function RouteNotFoundError(route) {
        return _super.call(this, "route ".concat(route, " not found"), 404) || this;
    }
    return RouteNotFoundError;
}(ClientError));
exports.RouteNotFoundError = RouteNotFoundError;
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(error) {
        return _super.call(this, error, 400) || this;
    }
    return ValidationError;
}(ClientError));
exports.ValidationError = ValidationError;
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        return _super.call(this, message, 401) || this;
    }
    return UnauthorizedError;
}(ClientError));
exports.UnauthorizedError = UnauthorizedError;
