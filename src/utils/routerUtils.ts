import { Router } from "express";
import { del, getAll, getOne, save, update } from "../controllers/base";
import { authorization } from "../middlewares/authorization";



export const addBaseRoutes = (router: Router, entity: any, entityRepository: any, options?: AddBaseRoutesOptions) => {
    let authOptions = options ? options.authorization : new AddBaseRoutesOptions().authorization;
    router.get("/", authorization(authOptions.getAllFunc), getAll(entity, entityRepository));
    router.get("/:id", authorization(authOptions.getOneFunc), getOne(entity, entityRepository));
    router.post("/", authorization(authOptions.saveFunc), save(entity, entityRepository));
    router.put("/", authorization(authOptions.updateFunc), update(entity, entityRepository));
    router.delete("/:id", authorization(authOptions.delFunc), del(entity, entityRepository));
    return router;
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
