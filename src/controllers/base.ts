import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { CustomAbstractRepository } from "../entity/customAbstractRepository";
import AppResponse from "../utils/appResponse";
import { AppError } from './../utils/appError';

export const getOne = <T>(model: any, repository: any) => async (req: Request<{}, {}, {}>, res: Response, next: NextFunction) => {
    console.log(req.query);
    var repo = getCustomRepository(repository) as CustomAbstractRepository<T>
    let entities = await repo.getManager().findByIds<T>(model, req.query.id as unknown[])
    if (entities.length == 0)
        return next(new AppError(404, "", "Entity not found"))

    let entity = entities[0];

    res.status(200).json(new AppResponse(entity));

}
export const getAll = <T>(model: any, repository: any) => async (req: Request<{}, {}, {}>, res: Response, next: NextFunction) => {
    let repo = getCustomRepository(repository) as CustomAbstractRepository<T>;
    let entities = await repo.getManager().find<T>(model, {})
    if (entities.length == 0)
        return next(new AppError(404, "", "Entity not found"))



    res.status(200).json(new AppResponse(entities));

}

export const save = <T>(model: any, repository: any) => async (req: Request<{}, {}, T>, res: Response, next: NextFunction) => {
    let repo = getCustomRepository(repository) as CustomAbstractRepository<T>;
    let entity = await repo.getManager().find<T>(model, { where: { id: (req.body as any).id } });
    if (entity)
        return next(new AppError(400, "", "Entity already exists"));
    entity = await repo.getManager().save(model, req.body)
    res.status(200).json(new AppResponse(entity));
}

export const del = <T>(model: any, repository: any) => async (req: Request<{}, {}, {}>, res: Response, next: NextFunction) => {
    let repo = getCustomRepository(repository) as CustomAbstractRepository<T>;
    let entity = await repo.getManager().find<T>(model, { where: { id: (req.query.id) } });
    if (!entity)
        return next(new AppError(400, "", "Entity not found"));
    await repo.getManager().remove(entity);
    res.status(200).json(new AppResponse(entity));
}
export const update = <T>(model: any, repository: any) => async (req: Request<{}, {}, {}>, res: Response, next: NextFunction) => {
    let repo = getCustomRepository(repository) as CustomAbstractRepository<T>;
    let entity = await repo.getManager().find<T>(model, { where: { id: (req.body as any).id } });
    if (!entity)
        return next(new AppError(400, "", "Entity not found"));
    await repo.getManager().save(model, req.body)
    res.status(200).json(new AppResponse(entity));
}

export default { getOne, getAll, save, update, del }

