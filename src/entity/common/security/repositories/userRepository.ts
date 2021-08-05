import { EntityRepository, getCustomRepository } from "typeorm";
import { CustomAbstractRepository } from "../../../customAbstractRepository";
import { User } from "../user";

@EntityRepository(User)
class UserRepository extends CustomAbstractRepository<User> {
    findByUsernameOrEmail(username: string, email: string) {
        return this.repository.findOne({ where: [{ email: email }, { username: username }] })
    }

    // getManager = () => this.manager;


}

export const GetUserRepository = () => getCustomRepository(UserRepository)