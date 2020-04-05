export const throwError = (code, errorType, errorMessage) => error => {
    if (!error) error = new Error(errorMessage || 'Default Error')
    error.code = code
    error.errorType = errorType
    throw error
}

export const throwIf = (fn, code, errorType, errorMessage) => result => {
    if (fn(result)) {
        return throwError(code, errorType, errorMessage)()
    }
    return result
}

export const sendError = (res, status, message) => err => {
    res.status(status || err.status).json({
        type: 'error',
        message: message || err.message,
        error
    })
}
