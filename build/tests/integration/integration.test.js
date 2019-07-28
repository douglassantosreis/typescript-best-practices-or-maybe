"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var HTTPStatus = require("http-status");
describe('Teste de integracão', function () {
    'use strict';
    //const config = require('../../config')();
    var model = require('../../models');
    var id;
    var userTest = {
        id: id,
        name: 'Usuário Teste',
        email: 'teste@teste.com.br',
        password: 'teste'
    };
    var userDefault = {
        id: 1,
        name: 'Default Teste',
        email: 'default@default.com.br',
        password: 'default'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            .then(function () {
            return model.User.create(userDefault);
        })
            .then(function (user) {
            model.User.create(userTest)
                .then(function () {
                done();
            });
        });
    });
    describe('GET/ /api/users/all', function () {
        it('Deve retornar um Array com todos os usuários', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                helpers_1.expect(res.body.payload[0].name).to.be.equal(userDefault.name);
                helpers_1.expect(res.body.payload[0].email).to.be.equal(userDefault.email);
                done(error);
            });
        });
    });
    describe('GET/ /api/users/:id', function () {
        it('Deve retornar um Array com apenas um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + userDefault.id)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.be.equal(userDefault.id);
                helpers_1.expect(res.body.payload).to.have.all.keys([
                    'id', 'name', 'email', 'password'
                ]);
                id = res.body.payload.id;
                done(error);
            });
        });
    });
    describe('POST /api/users/create', function () {
        it('Deve criar um novo usuário', function (done) {
            var user = {
                id: 2,
                name: 'Teste',
                email: 'usuario@usuario.com.br',
                password: 'novouser'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.be.equal(user.id);
                helpers_1.expect(res.body.payload.name).to.be.equal(user.name);
                helpers_1.expect(res.body.payload.email).to.be.equal(user.email);
                done(error);
            });
        });
    });
    describe('PUT /api/users/:id/update', function () {
        it('Deve atualizar um usuário', function (done) {
            var user = {
                name: 'TestUpdate',
                email: 'update@email.com.br'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + userTest.id + "/update")
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.be.equal(userTest.id);
                helpers_1.expect(res.body.payload.name).to.be.equal(user.name);
                helpers_1.expect(res.body.payload.email).to.be.equal(user.email);
                done(error);
            });
        });
    });
    describe('DELETE /api/users/:id/destroy', function () {
        it('Deve deletar um usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .delete("/api/users/" + userTest.id + "/destroy")
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.be.equal(userTest.id);
                helpers_1.expect(res.body.payload.name).to.be.equal(userTest.name);
                helpers_1.expect(res.body.payload.email).to.be.equal(userTest.email);
                done(error);
            });
        });
    });
});
