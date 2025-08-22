import User from "../models/User.js";
import jwt from 'jsonwebtoken';
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

        const token = jwt.sign({uid: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        return res.json({token});


   } catch (error) {
       console.log(error);
       return res.status(500).json({error: 'Error al iniciar sesión'});
   }
    res.json({ok: "login"});
};