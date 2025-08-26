import jwt from "jsonwebtoken";

export const requireToken =(req,res,next)=>{
    try {
        let token = req.headers?.authorization;
        if(!token) throw Error('No Bearer');
        token =token.split(" ")[1];
        const {uid} =jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        next()
    } catch (error) {
        console.log(error.message);
        // return res.status(401).json({error: error.message})

        const TokenVerificationErrors={
            "Invalid signature": "La firma del token no es válida",
            "jwt expired": "El token ha expirado",
            "invalid token": "El token no es válido",
            "No Bearer": "No se encontró el prefijo Bearer",
        };
        return res.status(401)
        .send({error: TokenVerificationErrors[error.message] || error.message});
    }
}