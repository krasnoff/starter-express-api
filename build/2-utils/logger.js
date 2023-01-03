"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
// Errors log file:
var errorsLogFile = path_1.default.resolve(__dirname, "../errors.txt");
var activitiesLogFile = path_1.default.resolve(__dirname, "../activities.txt");
// Log error:
function logError(message, err) {
    var now = new Date();
    var msgToLog = now.toUTCString() + "\n";
    msgToLog += message + "\n";
    if (typeof err === "string")
        msgToLog += err + "\n"; // E.g. throw new "Blah..." in some internal library.
    if (err === null || err === void 0 ? void 0 : err.stack)
        msgToLog += "Stack: ".concat(err.stack, "\n");
    msgToLog += "----------------------------------------------------------------------------------------------------\n";
    fs_1.default.appendFile(errorsLogFile, msgToLog, function () { }); // Do nothing if fail to log.
}
// Log error:
function logActivity(message) {
    var now = new Date();
    var msgToLog = now.toUTCString() + "\n";
    msgToLog += message + "\n";
    msgToLog += "----------------------------------------------------------------------------------------------------\n";
    fs_1.default.appendFile(activitiesLogFile, msgToLog, function () { }); // Do nothing if fail to log.
}
exports.default = {
    logError: logError,
    logActivity: logActivity
};
