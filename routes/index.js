var express = require('express');
var router = express.Router();
var getUrls = require("../operation/getUrls");

router.get('/test', function (req, res, next) {
  let sql = "SELECT * FROM urltest";
  getUrls.query(sql, req.query, res)
});

module.exports = router;