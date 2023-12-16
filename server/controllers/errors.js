module.exports = (err, req, res, next) => {
    let status = 500,
        message = err?.message || 'Server error'

    if (err.type === 'JOI') {
        message = err.error.details[0].message
    }

    res.status(status).json({
        error: true,
        message: message
    })
}