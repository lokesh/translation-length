const express = require('express');
const fs = require('fs');
const { resolve } = require('path');

const fetchTranslationMultiLang = require('./api/fetchTranslationMultiLang');
const languages = require('./api/languages.js');
const words = require('./api/words.js');

const router = express.Router();

/*
Fetches new translations and saves them to file.
*/
router.get('/translations', function(req, res) {
  fetchTranslationMultiLang(words, languages)
    .then(value => {
			const data = { 'data': value };

			// Write data to file
			const filepath = resolve(process.cwd(), 'public/data/translations.json');
  		fs.writeFileSync(filepath, JSON.stringify(data, null, 2));

      return res.send(data);
    })
    .catch(err => {
			res.status(400).send(err);
    });
});

// Write data to file
router.post('/translations', function(req, res) {
  const filepath = resolve(process.cwd(), 'public/data/translations-measured.json');
  fs.writeFileSync(filepath, JSON.stringify(req.body, null, 2));

  res.send('File saved: public/data/translations-measured.json');
});


module.exports = router;


