import { AbstractRepository } from "typeorm";

export class CustomAbstractRepository<T> extends AbstractRepository<T>{
    constructor() {
        super();

    }
    save(entity: Partial<T>) {
        return this.manager.save(entity);
    }

    getManager = () => this.manager;

}