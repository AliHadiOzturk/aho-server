import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { AppError } from '../utils/appError';
export const authorization = (addAuth: boolean) => async (req: Request, res: Response, next: NextFunction) => {
    if (addAuth) {
        var authHeader = req.headers.authorization;
        if (authHeader) {

            var bearer = authHeader.split(" ")[1];
            try {
                var token = jwt.verify(bearer, process.env.TOKEN_KEY);
                await next();
            } catch (error) {
                return next(new AppError(401, 'Unauthorized'));
            }
        }
        else
            return next(new AppError(401, "Unauthorized"));
    }
    else
        await next();

}
