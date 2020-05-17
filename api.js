const express = require('express');
const { Translate } = require('@google-cloud/translate').v2;

const languages = require('./data/languages.js');
const words = require('./data/words.js');

console.log(words);

// Google translate setup
const projectId = 'translation-leng-1589263235830';
const translate = new Translate({projectId});




async function quickStart() {
  // The text to translate
  const text = 'Hello, world!';

  // The target language
  const target = 'ru';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
}

const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    'title': 'API',
  });
});

router.get('/translations', function(req, res) {
  quickStart();
  return res.send({'hi': 'there'});
});

router.get('/translation/:q', function(req, res) {
  return res.send(`hello ${req.params.q} `);
});

module.exports = router;


