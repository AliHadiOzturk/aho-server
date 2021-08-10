import { Router } from 'express';
import { UserRepository } from '../../entity/common/security/repositories/userRepository';
import { User } from '../../entity/common/security/user';
import { getAll, getOne } from './../base';

let userRoutes = Router();
userRoutes.get("/hi", (req, res, next) => res.send("Hello"))
userRoutes.get("/:id", getOne<User>(User, UserRepository))
// export const get = getOne<User>(GetUserRepository())
userRoutes.get("/", getAll<User>(User, UserRepository));

export default userRoutes;
