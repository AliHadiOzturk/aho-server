import { Router } from "express";
import authRouter from "./controllers/auth/auth";
import userRoutes from "./controllers/common/userController";

const routes = Router();
// const router = Router();

// export const Routes = async (req, res, next) => {

// }
routes.use("/auth", authRouter)
routes.use('/user', userRoutes);

export default routes;

// router.use("/auth", authRoutes)

// export default router;