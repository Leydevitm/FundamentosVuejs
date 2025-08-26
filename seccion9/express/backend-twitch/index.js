// import cookie from 'cookie-parser';
import 'dotenv/config';
import './database/connectdb.js';
import express from "express";
import cors from 'cors';
import authRouter from  './routes/auth.route.js'
import linkRouter from './routes/link.route.js'
import redirectRouter from './routes/redirect.route.js'
const app = express();

const whiteList = [process.env.ORIGIN1,process.env.ORIGIN2]
app.use(cors({
    origin: function(origin,callback){
        console.log("eyeye =>" , origin)
        if(!origin || whiteList.includes(origin)){
            return callback(null,origin);
        }
        return callback("Error de CORS origin: " + origin+ " No autorizado");
    },
})
);
app.use(express.json());
//ejemplo back redirect
app.use('/', redirectRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/links', linkRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))