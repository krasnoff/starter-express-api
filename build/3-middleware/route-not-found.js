"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_models_1 = require("../4-models/error-models");
function routeNotFound(request, response, next) {
    next(new error_models_1.RouteNotFoundError(request.originalUrl));
}
exports.default = routeNotFound;
