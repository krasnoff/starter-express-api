"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
var express_1 = __importDefault(require("express"));
var catch_all_1 = __importDefault(require("./3-middleware/catch-all"));
var route_not_found_1 = __importDefault(require("./3-middleware/route-not-found"));
var chatgpt_controller_1 = __importDefault(require("./6-controllers/chatgpt-controller"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
// Create a new express application instance
var server = (0, express_1.default)();
server.use(express_1.default.json());
server.use("/api", chatgpt_controller_1.default);
server.use("*", route_not_found_1.default);
server.use(catch_all_1.default);
server.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
