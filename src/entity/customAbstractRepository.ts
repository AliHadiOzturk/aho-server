import { AbstractRepository } from "typeorm";

export class CustomAbstractRepository<T> extends AbstractRepository<T>{
    save(entity: Partial<T>) {
        return this.manager.save(entity);
    }

    getManager = () => this.manager;

}