const { Translate } = require('@google-cloud/translate').v2;

const projectId = 'translation-leng-1589263235830';
const translate = new Translate({projectId});

async function fetchTranslation(q, lang) {
  return [translation] = await translate.translate(q, lang);
}

module.exports = fetchTranslation;