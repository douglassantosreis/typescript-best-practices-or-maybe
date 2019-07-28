import {Request, Response} from 'express';
import UserController from './controller';
let UserCrtl;

class UserRoutes {
    
    constructor(){
        UserCrtl = new UserController();
    }

    getAll(req: Request, res: Response){
        return UserCrtl.getAll(req, res); 
    }

    create(req: Request, res: Response){
        return UserCrtl.createUser(req, res);
    }

    findOne(req: Request, res: Response){
        return UserCrtl.getById(req, res);
    }

    update(req: Request, res: Response){
        return UserCrtl.updateUser(req, res);
    }

    destroy(req: Request, res: Response){
        return UserCrtl.deleteUser(req, res);
    }
}

export default UserRoutes;