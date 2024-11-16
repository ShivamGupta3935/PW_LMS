const errorMiddleware = (err, req, res, next) => {

    message: err.message || 500
    statusCode: err.statusCode || "something went wrong"

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack
    }
    )
}

export {errorMiddleware}