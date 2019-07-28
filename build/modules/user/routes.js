"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("./controller");
var UserCrtl;
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        UserCrtl = new controller_1.default();
    }
    UserRoutes.prototype.getAll = function (req, res) {
        return UserCrtl.getAll(req, res);
    };
    UserRoutes.prototype.create = function (req, res) {
        return UserCrtl.createUser(req, res);
    };
    UserRoutes.prototype.findOne = function (req, res) {
        return UserCrtl.getById(req, res);
    };
    UserRoutes.prototype.update = function (req, res) {
        return UserCrtl.updateUser(req, res);
    };
    UserRoutes.prototype.destroy = function (req, res) {
        return UserCrtl.deleteUser(req, res);
    };
    return UserRoutes;
}());
exports.default = UserRoutes;
