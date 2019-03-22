
const passport  = require('passport');

module.exports = (app) => {

    app.use(function (req, res, next) {
        // indicates whether the response can be shared with resources with the given origin.
        res.setHeader('Access-Control-Allow-Origin', '*');
        // specifies the method or methods allowed when accessing the resource in response to a preflight request.
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // is used in response to a preflight request to indicate which HTTP headers will be available via Access-Control-Expose-Headers when making the actual request.
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');
        next();
    });

    app.use((req, res, next) => {
       req.base = {
           status: 0,
           message: '',
       };
       next();
    });
}