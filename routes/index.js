var express = require('express');
var router = express.Router();
var lastTime = new Date().getTime()
let counter = 1
let secondLimit = 1
/* GET home page. */
router.get('/low-usage-endpoint', function (req, res, next) {
  var currentTime = new Date().getTime()
  var diff = (currentTime - lastTime) / 1000

  if (diff >= secondLimit) {
    lastTime = currentTime
    counter = 0
  }

  if (diff < secondLimit && counter >= 3) {
    return res.status(429).send({ "error": "LimitReached" })
  }

  counter += 1
  return res.send({ "success": true })
})

router.get('/', function (req, res, next) {
  return res.render("index", {"title" : "welcome"})
})
module.exports = router;
