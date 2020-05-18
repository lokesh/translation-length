const express = require('express');
const fetchTranslationMultiLang = require('./api/fetchTranslationMultiLang');

const languages = require('./api/languages.js');
const words = require('./api/words.js');

const router = express.Router();

router.get('/translations', function(req, res) {
  fetchTranslationMultiLang(words, languages)
    .then(value => {
      return res.send({
        'data': value,
      });
    });
});

module.exports = router;


