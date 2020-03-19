import { Router } from 'express';
import UserController  from '../controller/UserController';
const routes = Router();

routes.get('/user', UserController.get )

export default routes