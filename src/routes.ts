import { Router } from "express";
import authController from "./controllers/auth/auth";
import postController from "./controllers/blog/postController";
import userController from "./controllers/common/userController";

const routes = Router();
// const router = Router();

// export const Routes = async (req, res, next) => {

// }
routes.use("/auth", authController)
routes.use('/user', userController);
routes.use('/post', postController);

export default routes;

// router.use("/auth", authRoutes)

// export default router;