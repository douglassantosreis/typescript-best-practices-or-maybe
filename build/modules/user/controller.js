"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getAll = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    UserController.prototype.createUser = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    UserController.prototype.getById = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        res.status(200).json({
            message: 'OK'
        });
    };
    return UserController;
}());
exports.default = UserController;
