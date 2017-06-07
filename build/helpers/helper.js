"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

//this function handle the returning respose
function response(res, status, data, message) {
    return res.json({
        status: status,
        data: data,
        message: message
    });
}

exports.default = { response: response };