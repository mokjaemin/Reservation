const mysql = require("mysql")

const db = mysql.createConnection({
    host : "graduationprojectmok.cyhr9gpsfoti.ap-northeast-2.rds.amazonaws.com",
    user : "admin",
    password : "Ahrwoals11!!",
    database : "GraduationProjectMok"
});

db.connect();
module.exports = db;

