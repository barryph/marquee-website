let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | Marquee' });
});

router.get('/download', function(req, res, next) {
  res.render('download', { title: 'Download | Marquee' });
});

module.exports = router;
