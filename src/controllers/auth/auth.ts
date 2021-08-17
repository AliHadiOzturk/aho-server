import * as bcrypt from 'bcryptjs';
import { NextFunction, Request, Response, Router } from "express";
import * as jwt from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import { User } from '../../entity/security/user';
import { UserRepository } from '../../repositories/security/userRepository';
import { AppError } from '../../utils/appError';
import { Person } from './../../entity/common/person';


const authController = Router();
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
authController.get("/", (req, res) => res.json("OK"))
authController.post("/login", async (req: Request<{}, {}, LoginModel>, res: Response, next: NextFunction) => {
    if (!req.body)
        res.sendStatus(404);
    let request = req.body;



    const userRepository = getCustomRepository(UserRepository)
    let user = await userRepository.findByUsernameOrEmail(request.username, request.username)

    if (!user)
        res.send(new AppError(400, "User not found"));

    let password = request.password;
    let passwordHash = await bcrypt.hash(user.password, 10);
    if (!bcrypt.compareSync(password, passwordHash))
        res.send(new AppError(400, "Username or password is invalid"));
    delete user.password;
    const token = jwt.sign({
        user: user.id,
        username: user.username,
    }, process.env.TOKEN_KEY, {
        expiresIn: '2h'
    });
    res.json({
        token: token,
        user: user
    });
})

authController.post("/register", async (req: Request<{}, {}, RegisterModel>, res: Response, next: NextFunction) => {
    if (Object.keys(req.body).length == 0)
        return res.status(400).json(new AppError(400, "", "Body cannot be empty"));
    let request = req.body;

    const userRepository = getCustomRepository(UserRepository);
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

export default authController;



