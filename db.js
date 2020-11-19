var mysql = require('mysql');
var dbConfig = require('./db.config');
var connection = mysql.createConnection(dbConfig);
connection.connect(function (err) {
  if (err) {
    console.log('数据库链接失败');
    throw err;
  }
  console.log("连接数据库成功");
});

module.exports = {
  query: function (sql, params, callback) {
    connection.query(sql, params, function (err, results, fields) {
      if (err) {
        console.log('数据操作失败');
        throw err;
      }
      const data = JSON.parse(JSON.stringify(results));
      const fieldsData = JSON.parse(JSON.stringify(results));
      callback && callback(data, fieldsData);
    });
  }
};