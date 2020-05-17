const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    'title': '🐟 Babel Fish',
  });
});

module.exports = router;


