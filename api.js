const express = require('express');
const fetchTranslationMultiLang = require('./api/fetchTranslationMultiLang');

const languages = require('./data/languages.js');
const words = require('./data/words.js');

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


