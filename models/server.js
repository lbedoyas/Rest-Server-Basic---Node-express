const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }
    middlewares(){
        //Cors
        this.app.use(cors());
        //el formato que recibe el backend es JSON(parseo y lectura del body)
        this.app.use(express.json());
        //directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.usuariosPath , require('../routes/usuarios.router'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('El servidor corriendo en el puerto', this.port);
        });
    }
}

module.exports = Server;