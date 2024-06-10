import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`Request: ${timestamp} Method: ${req.method} Route: ${req.url}`);
        next();
    }
}

export const loggerGlobal = ( req: Request, res: Response, next: NextFunction) => {

    const timestamp = new Date().toLocaleTimeString();
    console.log(`Request: ${timestamp} Method: ${req.method} Route: ${req.url}`);
    next();
  
    };