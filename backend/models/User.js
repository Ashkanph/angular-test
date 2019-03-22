let bcrypt  = require('bcrypt');
const sql   = require('../services/db');

function comparePassword(receivedPassword, pw, cb) {
    bcrypt.compare(receivedPassword, pw, function(err, isMatch) {
        if (err) {
            return cb(err);
        }
        return cb(null, isMatch);
    });
};

function findUser(userId, password) {
    return new Promise(function(resolve, reject){
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                reject(err);
            }
            sql.query('SELECT * FROM `users` WHERE `userId` = ?' , 
                [userId], 
                function (err, results) {
                    if(err){ // An error happened
                        reject("No user.");
                    }else if(results.length == 0){  // username or password was wrong
                        reject("No user.");
                    }else{ // username and password were correct
                        comparePassword(password, results[0].password, 
                            (err, match)=>{
                                if(err || !match)
                                    reject("No user.");
                                else{
                                    console.warn("resssssssss: ", results[0]);
                                    
                                    resolve({
                                        id: results[0].id,
                                        name: results[0].name,
                                        userId: results[0].userId
                                    });
                                }
                                });
                    }
                });
        });
    });

    // sql.query('SELECT password FROM `users` WHERE `userId` = ? AND `password` = ?' , 
    //             [userId, password], 
    //             function (err, results) {
    //                 if(err){ // username was not right
    //                     reject("No user.");
    //                 }else{ // password was correct
    //                     resolve(results);
    //                 }
    //             });

    // return new Promise(function(resolve, reject) {
    //     let userIndex = users.findIndex((item)=> item.username === user.username);
        
    //     if(userIndex > -1)
    //         comparePassword(user.password, users[userIndex].password, 
    //                 (err, isMatch) => {
    //                     if(err){ // username was not right
    //                         reject("No user.");
    //                         return;
    //                     }else if(isMatch){ // password was correct
    //                         resolve(users[userIndex]);
    //                         return;
    //                     }else{ 
    //                         // Password was wrong
    //                         reject("No user.");
    //                         return;
    //                     }
    //                 });
    //     else
    //         reject("No user!");
    //   });
}

module.exports = { findUser };