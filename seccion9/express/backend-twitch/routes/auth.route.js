import {Router} from "express";
import {infoUser, login,register, refreshToken, logout} from "../controllers/auth.controller.js";
import {body}  from 'express-validator';
import { validationResultExpress } from '../middlewares/validationResultExpress.js';
import { requireToken } from "../middlewares/requireAuth.js";
const router = Router();


router.post(
    "/register",
    [
        body('email', "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
        body("password", "Minimo 6 caracteres").trim().isLength({ min: 6 }),
        body('password', "La contraseña es incorrecta").custom(
            (value,{req}) =>{

        if(value !== req.body.repassword){
            throw new Error('No coinciden las contraseñas');

        }
        return value;
        })
    ],
    validationResultExpress,
    register);


router.post("/login", [
    body('email', "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
        body("password", "Minimo 6 caracteres")
        .trim()
        .isLength({ min: 6 }),
    ],
    validationResultExpress,
    login
);
router.get("/protected",requireToken,infoUser)
router.get("/refreh",refreshToken)
router.get('/logout', logout)
export default router;
