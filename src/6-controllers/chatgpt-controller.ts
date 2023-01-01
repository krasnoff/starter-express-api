import express, { NextFunction, Request, Response } from "express";
import example from "../5-services/chatgpt-service";

const router = express.Router();

router.get("/employees", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const employee = await example.example();
        response.json(employee);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;