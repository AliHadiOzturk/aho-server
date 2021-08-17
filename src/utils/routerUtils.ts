import { Router } from "express";
import { del, getAll, getOne, save, update } from "../controllers/base";
import { authorization } from './../middlewares/authorization';


export const addBaseRoutes = (router: Router, entity: any, entityRepository: any, options?: AddBaseRoutesOptions) => {
    let authorization = options ? options.authorization : new AddBaseRoutesOptions().authorization;
    router.get("/", addAuth(authorization.getAllFunc), getAll(entity, entityRepository));
    router.get("/:id", addAuth(authorization.getOneFunc), getOne(entity, entityRepository));
    router.post("/", addAuth(authorization.saveFunc), save(entity, entityRepository));
    router.put("/", addAuth(authorization.updateFunc), update(entity, entityRepository));
    router.delete("/:id", addAuth(authorization.delFunc), del(entity, entityRepository));
    return router;
}

const addAuth = (addAuth: boolean) => async (req, res, next) => {
    if (addAuth) {
        return authorization;
    }
    else {
        return next();
    }
}

export class AddBaseRoutesOptions {
    authorization = {
        getAllFunc: true,
        getOneFunc: true,
        saveFunc: true,
        updateFunc: true,
        delFunc: true
    }
}
