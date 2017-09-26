//var mysql = require("mysql");
//var connection = mysql.createConnection({
//  host: "localhost",
//  user: "root",
//  password: "",
//  database: "burgers_db"
//});
//connection.connect(function(err) {
//  if (err) {
//    console.error("error connecting: " + err.stack);
//    return;
//  }
//  console.log("connected as id " + connection.threadId);
//});
//module.exports = connection;

var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
  // host: "o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  // user: "rsc3yemoent7osfp",
  // password: "d4hr3rri6mkxb1nr",
  // database: "burgers_db"
});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
