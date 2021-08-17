import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { AppError } from '../utils/appError';
export const authorization = async (req: Request, res: Response, next: NextFunction) => {
    var authHeader = req.headers.authorization;
    var bearer = authHeader.split(" ")[1];
    try {
        var token = jwt.verify(bearer, process.env.TOKEN_KEY);
        await next();
    } catch (error) {
        res.json(new AppError(401, "Unauthorized"));
    }
}
