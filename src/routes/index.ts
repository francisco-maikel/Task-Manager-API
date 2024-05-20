import { Router } from "express";
import { userRoutes } from "./user.routes";
import {authRoutes} from

export const router = Router();

router.use(authRoutes)
router.use(userRoutes);
