import {IUser, IUserDetail, createUser, createUserByEmail, createUserById, createUsers} from './interface';
import * as BlueBird from 'bluebird';
const model = require('../../models');

class User implements IUser{
    public id: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(){}

    create(user: any){
        return model.User.create(user);
    }

    getAll(): BlueBird<IUser>{
        return model.User.findAll({
            order:['name']
        })
        .then(createUsers);
    }

    getById(id: number): BlueBird<IUserDetail>{
        return model.User.findOne({
            where: {id}
        })
        .then(createUserById);
    }

    getByEmail(email: string): BlueBird<IUserDetail>{
        return model.User.findOne({
            where: {email}
        })
        .then(createUserByEmail);
    }
    update(id: number, user: any){
        return model.User.update(user,{
            where: {id},
            fields: ['name','email','password']
        });
    }
    delete(id: number){
        return model.User.delete({
            where: {id}
        });
    }
}

export default User;

