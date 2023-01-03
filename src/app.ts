// lib/app.ts
import express from 'express';
import catchAll from './3-middleware/catch-all';
import routeNotFound from './3-middleware/route-not-found';
import chatGPTController from "./6-controllers/chatgpt-controller";
import * as dotenv from 'dotenv'

dotenv.config();

// Create a new express application instance
const server: express.Application = express();

server.use(express.json());
server.use("/api", chatGPTController);
server.use("*", routeNotFound);

server.use(catchAll);

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});  