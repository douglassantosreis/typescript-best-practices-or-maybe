import { app, request, expect } from './config/helpers';
import * as HTTPStatus from 'http-status';
import * as jwt from 'jwt-simple';

describe('Teste de integracão', () => {

    'use strict';
    const config = require('../../config/env/config')();
    const model = require('../../models');

    let id;
    let token;

    const userTest = {
        id: id,
        name: 'Usuário Teste',
        email: 'teste@teste.com.br',
        password: 'teste'
    };

    const userDefault = {
        id: 1,
        name: 'Default Teste',
        email: 'default@default.com.br',
        password: 'default'
    };

    beforeEach((done) =>{
        model.User.destroy({
            where:{}
        })
        .then(() =>{
            return model.User.create(userDefault);
        })
        .then(user =>{
            model.User.create(userTest)
            .then(() =>{
                token = jwt.encode({id: user.id}, config.secret)
                done();
            });
        })
    });

    describe('POST /token', () =>{
        it('deve retornar um JWT', done => {
            const credentials = {
                email: userDefault.email,
                password: userDefault.password
            };
            request(app)
                .post('/token')
                .send(credentials)
                .end((err, res) =>{
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.token).to.equal(`${token}`);
                    done(err);
                })
        });

        it('Não deve gerar o token', done =>{
            const credentials = {
                email: "aaa",
                password: "bbb"
            };
            request(app)
                .post('/token')
                .send(credentials)
                .end((err, res) =>{
                    expect(res.status).to.equal(HTTPStatus.UNAUTHORIZED);
                    expect(res.body).to.empty;
                    done(err);
                })
            
        })
    });

    describe('GET/ /api/users/all', () => {
        it('Deve retornar um Array com todos os usuários', done => {
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload).to.be.an('array');
                    expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                    expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                    done(error);
                });
        });
    });

    describe('GET/ /api/users/:id', () => {
        it('Deve retornar um Array com apenas um usuário', done => {
            request(app)
                .get(`/api/users/${userDefault.id}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload.id).to.be.equal(userDefault.id);
                    expect(res.body.payload).to.have.all.keys([
                        'id', 'name', 'email', 'password'
                    ]);
                    id = res.body.payload.id;
                    console.log(res.body.payload);

                    done(error);
                });
        });
    });

    describe('POST /api/users/create', () => {
        it('Deve criar um novo usuário', done => {
            const user = {
                id: 2,
                name: 'Teste',
                email: 'usuario@usuario.com.br',
                password: 'novouser'
            }
            request(app)
                .post('/api/users/create')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload.id).to.be.equal(user.id);
                    expect(res.body.payload.name).to.be.equal(user.name);
                    expect(res.body.payload.email).to.be.equal(user.email);
                    done(error);
                });
        });
    });

    describe('PUT /api/users/:id/update', () => {
        it('Deve atualizar um usuário', done => {
            console.log(userTest);
            const user = {
                name: 'TestUpdate',
                email: 'update@email.com.br'
            }
            request(app)
                .put(`/api/users/${userTest.id}/update`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload.id).to.be.equal(userTest.id);
                    expect(res.body.payload.name).to.be.equal(user.name);
                    expect(res.body.payload.email).to.be.equal(user.email);
                    done(error);
                });
        });
    });

    describe('DELETE /api/users/:id/destroy', () => {
        it('Deve deletar um usuário', done => {
            console.log(userTest);
            request(app)
                .delete(`/api/users/${userTest.id}/destroy`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload.id).to.be.equal(userTest.id);
                    expect(res.body.payload.name).to.be.equal(userTest.name);
                    expect(res.body.payload.email).to.be.equal(userTest.email);
                    done(error);
                });
        });
    });
});