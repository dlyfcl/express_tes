var db = require("../db");
module.exports = {
  query: function (sql, query, res) {
    if (query.id) {
      sql += ` WHERE id = ${query.id}`;
    }
    db.query(sql, [], function (results, fields) {
      res.json(results);
    })
  }
}