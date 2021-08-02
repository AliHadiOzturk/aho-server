import { NextFunction, Request, Response } from "express";
import { BaseEntity } from "typeorm";
import { CustomAbstractRepository } from "../entity/customAbstractRepository";
import AppResponse from "../utils/appResponse";
import { AppError } from './../utils/appError';

export const getOne = <T>(model: CustomAbstractRepository<T>) => async (req: Request<{}, {}, {}>, res: Response, next: NextFunction) => {
    console.log(req.query);
    let entities = await model.getManager().findByIds<T>(BaseEntity, req.query.id as unknown[])
    if (entities.length == 0)
        return next(new AppError(404, "", "Entity not found"))

    let entity = entities[0];

    res.status(200).json(new AppResponse(entity));

}