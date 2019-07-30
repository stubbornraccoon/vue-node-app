const pool = require('./pool');

function Goal() {};

Goal.prototype = {
    //create new goal
    create:  function(body, callback){
        //make array to store body data
        var bind = [];
        //place data in above array
        for(prop in body){
            bind.push(body[prop]);
        }
        //make sql object to house actual SQL command
        let sql = 'INSERT INTO goals(goal, goalnum, realnum, progress) VALUES (?, ?, ?,?f)`;

        pool.query(sql, bind, function(err, result) {
            if(err) throw err;
            // return the last inserted id. if there is no error
            callback(result.insertId);
        });
    }

}
//add read, update, delete  
