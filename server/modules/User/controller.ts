import {Request, Response} from 'express';
import * as HTTPStatus from 'http-status';
import User from './service';
class UserController{

    private userService: User;

    constructor(){
        this.userService = new User();
    }

    getAll(req: Request, res: Response){
        this.userService
            .getAll()
            .then(data =>{
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({payload: 'Erro ao buscar todos os usuário'});
            });
    }

    createUser(req: Request, res: Response){
        this.userService
            .create(req.body)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({payload: 'Erro ao cadastra o usuário'});
            });
    }

    getById(req: Request, res: Response){
        const userId = parseInt(req.params.id);
        this.userService
            .getById(userId)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({payload: 'Erro buscar usuário por ID'});
            });
    }

    updateUser(req: Request, res: Response){
        const userId = parseInt(req.params.id);
        this.userService
            .update(userId, req.body)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({payload: 'Erro ao atualizar o usuário'});
            });
    }
    
    deleteUser(req: Request, res: Response){
        const userId = parseInt(req.params.id);
        this.userService
            .delete(userId)
            .then(data => {
                res.status(HTTPStatus.OK).json({payload: data});
            })
            .catch(err =>{
                res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({payload: 'Erro ao cadastra o usuário'});
            });
    }
}

export default UserController;