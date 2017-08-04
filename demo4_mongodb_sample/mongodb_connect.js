/**
 * Created by zhanghao1 on 2017/8/4.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/node_practice';

var insertData = function(db, callback) {
    var collection = db.collection('person');
    var data = [
        {
            "name":"zhanghao1",
            "age":"27",
            "address":"address"
        },{
            "name":"zhanghao2",
            "age":"28",
            "address":"address"
        },{
            "name":"zhanghao3",
            "age":"29",
            "address":"address"
        }
    ];
    collection.insert(data, function(err, result) {
        if(err){
            console.log(err);
            return;
        }
        callback(result);
    });
};

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});