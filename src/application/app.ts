import { Router , Request, Response} from 'express';
import { Sequelize } from 'sequelize';
import  UserController    from './controller/UserController';
import Routes from './routes';
import Config_database from './config/database';
import Express from 'express'


class App{

    public app: Express.Application;

    constructor(){
        this.app = Express.application;
        this.init_server();
    }

    public async init_server(){
        
        this.app.listen('3000', () => {
            console.log('works app');
        });
    }

    public async init_database(){
        const connection = new Sequelize(Config_database.database, Config_database.user, Config_database.password,{
            host: Config_database.host,
            dialect: 'mysql',
            port: Config_database.port
        });

    }
    



}

export default  App;