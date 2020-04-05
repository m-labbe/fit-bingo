"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendError = exports.throwIf = exports.throwError = void 0;

var throwError = function throwError(code, errorType, errorMessage) {
  return function (error) {
    if (!error) error = new Error(errorMessage || 'Default Error');
    error.code = code;
    error.errorType = errorType;
    throw error;
  };
};

exports.throwError = throwError;

var throwIf = function throwIf(fn, code, errorType, errorMessage) {
  return function (result) {
    if (fn(result)) {
      return throwError(code, errorType, errorMessage)();
    }

    return result;
  };
};

exports.throwIf = throwIf;

var sendError = function sendError(res, code, message) {
  return function (err) {
    res.status(code || err.code).json({
      type: 'error',
      message: message || err.message,
      err: err
    });
  };
};

exports.sendError = sendError;