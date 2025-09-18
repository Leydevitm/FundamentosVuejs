import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexion a DB
const mongoose = require('mongoose');

const uri = 'mongodb+srv://Leivy:aQ5W8mM2YZUMq3L4@clustercafe.wsp3lej.mongodb.net/MVN';

// Opcional para evitar advertencias de strictQuery
mongoose.set('strictQuery', false);

mongoose.connect(uri, { useUnifiedTopology: true })
  .then(() => console.log('Conectado a mongoDB'))
  .catch(err => console.log('Error al conectar:', err));

// Middleware

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/api', require('./routes/nota'));

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port ' + app.get('puerto'));
});