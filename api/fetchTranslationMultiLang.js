const fetchTranslation = require('./fetchTranslation');

async function fetchTranslationMultiLang(q, langs) {
  const promises = langs.map(async lang => {
    const translationObj = await fetchTranslation(q, lang);
    return translationObj[0];
  })
  const translationArrays = await Promise.all(promises)

  const translations = {};
  langs.forEach((lang, i) => {
    translations[lang] = translationArrays[i];
  });  
  return translations;
}

module.exports = fetchTranslationMultiLang;