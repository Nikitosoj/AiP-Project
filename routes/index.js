var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Ego', function(req, res, next) {
  res.render('ego', {
  title: "Egoism",
  picture: "images/Ego.jpg",
  desc: "Эгоисты не приемлют навязанных обществом целей, а следуют только своим. И более того, для достижения собственных целей эгоисты зачастую готовы буквально «идти по головам»: они используют все способы и средства, чтобы добиться своего.  "
  });
  });
  router.get('/Selflove', function(req, res, next) {
    res.render('ego', {
    title: "Self-Love",
    picture: "images/selflove.jpeg",
    desc: "Самолюбие – это любовь и уважение к себе, основанные на осознании собственных достоинств и способностей. Оно присутствует у всех людей, но при этом может иметь как положительные, так и отрицательные проявления. У тех, кому свойственны здоровый эгоизм и адекватная самооценка, самолюбие развито умеренно. Такие люди трезво оценивают свои достоинства и ожидают, что окружающие будут оценивать их так же. Поэтому в целом данное качество можно считать положительным и полезным "
    });
    });
    router.get('/selfrespect', function(req, res, next) {
      res.render('ego', {
      title: "Self-Respect",
      picture: "images/selfrespect.jpeg",
      desc: "self-respect is a beautiful concept, one that brings a positive light to the evaluation of our unique blend of strengths, weaknesses, and values. It forms the very core of psychological well-being, influencing our thoughts, emotions, and behaviors. "
      });
      });
module.exports = router;
