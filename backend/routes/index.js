
module.exports = (app) => {
    app.use(`/api/v${process.env.API_VERSION}`, require('./auth'));
};