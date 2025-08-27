
import mongoose from "mongoose";

try {
    mongoose.connect(process.env.URI_MONGO);
    console.log("Conectado a la base de datos");
} catch (error) {
    console.log("Error al conectar a la base de datos");
}
