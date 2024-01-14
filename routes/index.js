var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Ego', function(req, res, next) { res.send("<h1>Страница Ego</h1>")
});
router.get('/Selflove', function(req, res, next) { res.send("<h1>Страница Selflove</h1>")
});
router.get('/selfrespect', function(req, res, next) { res.send("<h1>Страница self respect</h1>")
});
module.exports = router;
