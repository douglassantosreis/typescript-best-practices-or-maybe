"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
var service_1 = require("./service");
var UserController = /** @class */ (function () {
    function UserController() {
        this.userService = new service_1.default();
    }
    UserController.prototype.getAll = function (req, res) {
        this.userService
            .getAll()
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao buscar todos os usuário' });
        });
    };
    UserController.prototype.createUser = function (req, res) {
        this.userService
            .create(req.body)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao cadastra o usuário' });
        });
    };
    UserController.prototype.getById = function (req, res) {
        var userId = parseInt(req.params.id);
        this.userService
            .getById(userId)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro buscar usuário por ID' });
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        var userId = parseInt(req.params.id);
        this.userService
            .update(userId, req.body)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao atualizar o usuário' });
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        var userId = parseInt(req.params.id);
        this.userService
            .delete(userId)
            .then(function (data) {
            res.status(HTTPStatus.OK).json({ payload: data });
        })
            .catch(function (err) {
            res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao cadastra o usuário' });
        });
    };
    return UserController;
}());
exports.default = UserController;
