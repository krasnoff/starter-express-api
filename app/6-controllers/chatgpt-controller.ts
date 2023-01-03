import express, { NextFunction, Request, Response } from "express";
import { ChatGPTRequestModel } from "../4-models/chatGPTRequestModel";
import chatgptService from "../5-services/chatgpt-service";

const router = express.Router();

router.post("/completion", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const chatGPTRequestModel: ChatGPTRequestModel = request.body;
        const res = await chatgptService.createCompletion(chatGPTRequestModel.body);
        response.json(res);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;