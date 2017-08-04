/**
 * Created by zhanghao1 on 2017/8/4.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : 'zhhpc0601',
    database : 'node_practice'
});
connection.connect();

//select
connection.query('SELECT * FROM tbl_person', function (error, results) {
    if (error) throw error;
    console.log('--------------------------SELECT----------------------------');
    console.log(results);
    console.log(results[0].name + "___" + results[0].age + "___" + results[0].address);
});

//insert
connection.query('INSERT INTO tbl_person VALUES("zhanghao3","29","address")', function (error, results) {
    if (error) throw error;
    console.log('--------------------------INSERT----------------------------');
    console.log(results);
});

//update
connection.query('UPDATE tbl_person SET age = "30" WHERE name = "zhanghao1"', function (error, results) {
    if (error) throw error;
    console.log('--------------------------UPDATE----------------------------');
    console.log(results);
});

//delete
connection.query('DELETE FROM tbl_person WHERE name = "zhanghao3"', function (error, results) {
    if (error) throw error;
    console.log('--------------------------DELETE----------------------------');
    console.log(results);
});

connection.end();