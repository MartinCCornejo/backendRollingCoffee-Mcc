import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';  // Permite procesar variables de entorno

// node --watch index.js - Comando experimental para desarrollo 
console.log('Hola mundo');


// 1. Configurar un puerto 
const app = express();

app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'),()=> {
    console.log('Estoy en el puerto '+ app.get('port'))
})


// 2. Configurar middlewares 
app.use(cors());  // Permite conexiones remotas
app.use(morgan('dev'));  // Muestra info extra en la terminal 
app.use(express.json());  // Permite interpretar el formato json;
app.use(express.urlencoded({extended:true}));  // Me permite interpretar los datos del body de un request


// 3. Configuración de las rutas 
app.get('/',(req, res) => {
    console.log('Hola mundo');
    res.send('Desde el backend de rollingCoffee');
})
