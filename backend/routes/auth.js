
const router        = require('express').Router();
const User          = require('../models/User');
const jwt           = require('jsonwebtoken');
const encryption    = require('../helpers/encryption');


module.exports = router;

router.post("/login", (req, res, next) => {
    if(!req.body.username || !req.body.password){
        //"Username and password are required."
        next(new Error("3"));
        return;
    }
    
    User.findUser(req.body.username, req.body.password).then(
        (user) => {
            // user has authenticated correctly thus we create a JWT token and return it
            var token = jwt.sign({
                data: encryption.encrypt(String(user.id))
            }, process.env.SECRET, { expiresIn: '1h' }); 
            
            res.json(Object.assign(req.base, {
                token,
                name: user.name,
                id: user.id,
                userId: user.userId,
                status: 0,
                message: "Successful login."
            }));
        },
        (err) => {
            // "Username or password is wrong."
            next(new Error("2"));
            return;
        }
    );
});