import { Router } from 'express';
import { User } from '../../entity/security/user';
import { UserRepository } from '../../repositories/security/userRepository';
import { addBaseRoutes } from '../../utils/routerUtils';

let userController = Router();
userController = addBaseRoutes(userController, User, UserRepository);

export default userController;
