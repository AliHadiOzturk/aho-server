import * as bcrypt from 'bcryptjs';
import { NextFunction, Request, Response, Router } from "express";
import * as jwt from 'jsonwebtoken';
import { GetUserRepository } from '../../entity/common/security/repositories/userRepository';
import { User } from '../../entity/common/security/user';
import { AppError } from '../../utils/appError';
import { Person } from './../../entity/common/person';

const authRouter = Router();
interface LoginModel {
    username: string,
    password: string;
}
interface RegisterModel {
    username: string,
    password: string;
    email: string;
    phoneNumber: string,
    firstName: string,
    lastName: string,
}
authRouter.get("/", (req, res) => res.json("OK"))
authRouter.post("/login", async (req: Request<{}, {}, LoginModel>, res: Response, next: NextFunction) => {
    if (!req.body)
        res.sendStatus(404);
    let request = req.body;

    const userRepository = GetUserRepository()
    let user = await userRepository.findByUsernameOrEmail(request.username, request.username)
})

authRouter.post("/register", async (req: Request<{}, {}, RegisterModel>, res: Response, next: NextFunction) => {
    if (Object.keys(req.body).length == 0)
        return res.status(400).json(new AppError(400, "", "Body cannot be empty"));
    let request = req.body;

    const userRepository = GetUserRepository();
    let user = await userRepository.findByUsernameOrEmail(request.username, request.username)

    if (user) {
        return res.status(403).send("User already exist");
    }

    let encryptedPassword = await bcrypt.hash(request.password, 10);

    var newUser = new User().create({
        email: request.email,
        password: encryptedPassword,
        person: new Person().create(
            {
                phoneNumber: request.phoneNumber,
                firstName: request.firstName,
                lastName: request.lastName
            }),
        username: request.username
    });
    var registeredUser = await userRepository.save(newUser);
    const token = jwt.sign(
        { username: registeredUser.username },
        process.env.TOKEN_KEY,
        { expiresIn: '2h' })


    res.status(201).json({ user: { username: registeredUser.username }, token: token })
})

export default authRouter;



