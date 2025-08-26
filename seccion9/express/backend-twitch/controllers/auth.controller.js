import User from "../models/User.js";
import jwt from 'jsonwebtoken';
import  {generateRefreshToken, generateToken}  from "../utils/tokenManager.js";
export const register = async(req,res)=>{
    const {email,password} =req.body;
    try {
        //Alternativa buscando por email
        let user =await User.findOne({email});
        if(user) throw ({code: 11000});
         user = new User({email,password});
         await user.save();

        return res.json({ok: 'Register'});
    } catch (error) {
        console.log(error);
        //Alternativa por efecto mongoose
        // res.status(500).json({error: 'Error al registrar el usuario'});
        if(error.code === 11000){
            return res.status(400).json({error: 'El email ya está registrado'});
        }
        return res.status(500).json({error: 'Error al registrar el usuario'});
    }
};

export const login = async(req,res)=>{
   try {
    const {email,password} =req.body;
     let user =await User.findOne({email});
        if(!user) return res.status(403).json({error: 'No existe el usuario'});

    const respuestaPassword = await user.comparePassword(password);
        if(!respuestaPassword) return res.status(403).json({error: 'Contraseña incorrecta'});
        const {token, expiresIn} =generateToken(user.id)
        generateRefreshToken(user.id,res);
     return res.json({token, expiresIn});
   } catch (error) {
       console.log(error);
       return res.status(500).json({error: 'Error al iniciar sesión'});
   }
   
};


export const infoUser = async(req,res)=>{
    try {
        const user = await User.findById(req.uid).lean()
        return res.json({email: user.email,uid: user.id});
    } catch (error) {
        return res.status(500).json({error: 'Error al obtener la información del usuario'});
    }
  
}


export const refreshToken = (req,res)=>{
    try {
        const refreshTokenCookie = req.cookies.refreshToken
        if(!refreshTokenCookie) throw new Error("No existe el token");
        const {uid} =jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);
        const {token, expiresIn} =generateToken(uid)
        return res.json({token,expiresIn});

    } catch (error) {
        console.log(error);
         const TokenVerificationErrors={
            "Invalid signature": "La firma del token no es válida",
            "jwt expired": "El token ha expirado",
            "invalid token": "El token no es válido",
            "No Bearer": "No se encontró el prefijo Bearer",
        };
        return res.status(401)
        .send({error: TokenVerificationErrors[error.message] || error.message});
    }
    // const token = req.cookies.refreshToken
};

export const logout = (req,res)=>{
    try {
        res.clearCookie("refreshToken");
        return res.json({ok: 'Logout exitoso'});
    } catch (error) {
        return res.status(500).json({error: 'Error al cerrar sesión'});
    }
}