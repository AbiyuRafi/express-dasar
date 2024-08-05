const logRequest = (req, res, next) => {
    console.log('Request to Path: ', req.path);
    next();
}

module.exports = logRequest;