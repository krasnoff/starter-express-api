"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_config_1 = __importDefault(require("../2-utils/app-config"));
var logger_1 = __importDefault(require("../2-utils/logger"));
function catchAll(err, request, response, next) {
    // log to console:
    console.log("Error: " + err.message);
    // Get error status code: 
    var status = err.status ? err.status : 500;
    // 1. Must log server errors: 
    if (status === 500) {
        logger_1.default.logError("catchAll Error", err);
    }
    // 2. Never return system error on production: 
    var message = (app_config_1.default.isDevelopment || status !== 500) ? err.message : "Some error, please try again...";
    // send back error: 
    response.status(status).send(message);
}
exports.default = catchAll;
