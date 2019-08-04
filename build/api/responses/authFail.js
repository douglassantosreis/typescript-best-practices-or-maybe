"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = require("http-status");
function fail(req, res) {
    res.sendStatus(HTTPStatus.UNAUTHORIZED);
}
exports.default = fail;
