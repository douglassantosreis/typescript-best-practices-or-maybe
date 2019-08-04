import {Request, Response, response} from 'express';
import * as jwt from 'jwt-simple';
import * as  HTTPStatus from 'http-status';
import { any } from 'bluebird';
 const config = require('../../config/env/config')();

 export default function authSuccess(res: Response, credential: any, data: any){
    const isMatch = (credential.password == data.password);

    if(isMatch){
        const payload = {id: data.id}
        res.json({
            token: jwt.encode(payload, config.secret)
        });
    }else{
        res.sendStatus(HTTPStatus.UNAUTHORIZED);
    }
}
