import jwt from 'jsonwebtoken';

export const generateToken = (uid)=>{

    const expiresIn=60*15

    try {
        const token = jwt.sign({uid}, process.env.JWT_SECRET, {expiresIn});
        return {token, expiresIn};
    } catch (error) {
        console.log(error);
        
    }
};

export const generateRefreshToken = (uid,res)=>{
    const expiresIn=60*60*24*30
    try {
        const refreshToken = jwt.sign({uid}, process.env.JWT_REFRESH, {expiresIn});
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODE === "developer"),
            expires: new Date(Date.now()+expiresIn *1000)
        });
    } catch (error) {
        console.log(error);
    }
}

export const tokenVerificationErrors={
            "Invalid signature": "La firma del token no es válida",
            "jwt expired": "El token ha expirado",
            "invalid token": "El token no es válido",
            "No Bearer": "No se encontró el prefijo Bearer",
        };


