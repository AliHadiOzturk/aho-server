import { Request, Response } from 'express';
export function LogMiddleware(options?: any) {
    return function (req: Request, res: Response, next) {
        console.log("URL => ", req.url)
        console.log("QUERY => ", req.query)
        console.log("METHOD => ", req.method)
        console.log("IP => ", req.ip)
        console.log("DATE => ", new Date())
        console.log("-----------------------")
        next();
    }
}