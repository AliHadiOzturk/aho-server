import { Router } from "express";
import { del, getAll, getOne, save, update } from "../controllers/base";

export const addBaseRoutes = (router: Router, entity: any, entityRepository: any) => {
    router.get("/", getAll(entity, entityRepository));
    router.get("/:id", getOne(entity, entityRepository));
    router.post("/", save(entity, entityRepository));
    router.put("/", update(entity, entityRepository));
    router.delete("/:id", del(entity, entityRepository));
    return router;
}
