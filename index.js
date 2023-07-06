import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import 'dotenv/config'
import './src/database/dbconnection'
import tareaRouter from './src/routes/tareas.routes'
//Uso un puerto
const app = express();
app.set('port',process.env.PORT || 4001);
app.listen(app.get('port'),()=>{
    console.log('estoy en el puerto '+app.get('port'))
});


// uso middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
console.log(path.join(__dirname,'/public'))

console.log('hello world');
//ruta
//http://localhost:4001/apitarea/lista_de_tareas/tareas
app.use("/apitarea",tareaRouter);