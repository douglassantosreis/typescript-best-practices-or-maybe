"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../modules/User/service");
describe('Teste unitários do Controller', function () {
    describe('Metodo Create', function () {
        it('Deve cria um novo usuário', function () {
            var novoUsuario = {
                id: 9999,
                name: 'Novo Usuário',
                email: 'novo@usuario.com.br',
                password: '1234'
            };
            var user = new service_1.default();
            return user.create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    describe('Metodo Update', function () {
        it('Deve atualizar um novo usuário', function () {
            var usuarioUpdate = {
                name: 'Usuário Atualizado',
                email: 'usuario@atualizado.com.br'
            };
            var user = new service_1.default();
            return user.update(9999, usuarioUpdate)
                .then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('Metodo GET Users', function () {
        it('Deve retornar uma lista com todos os usuários', function () {
            var user = new service_1.default();
            return user.getAll()
                .then(function (data) {
                helpers_1.expect(data).to.be.an('array');
                helpers_1.expect(data[0]).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Metodo DELETE Users', function () {
        it('Deve deletar um usuário', function () {
            var user = new service_1.default();
            return user.delete(1)
                .then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
    describe('Metodo mostra usuário especifico', function () {
        it('Deve mostrar o usuário pelo ID', function () {
            var user = new service_1.default();
            return user.getById(9999)
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Metodo mostra usuário especifico', function () {
        it('Deve mostrar o usuário pelo EMAIL', function () {
            var user = new service_1.default();
            return user.getByEmail('usuario@atualizado.com.br')
                .then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
});
