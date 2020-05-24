## Quick start
```
npm install
nodemon app.js
http://localhost:3000/
```

## API

```
**api/translation/{q}**

@param String|String[] q String or array of strings to translate
@returns String|String[] translation
```


## Adding new words and updating export

- Add word to api/words.js
- Start app with: `nodemon app.js`
- Visit localhost:3000
- Click Fetch button
- Reload index.html in browser

New data should be stored in `public/data/translations-measured.json`


## Notes

Scraping sites for unique words.

```
// let invalidChars = '{}[]()/=:;'.split('');
// let body = document.getElementsByTagName('body')[0]
// let textArray = body.textContent.split(/\r?\n/);
// textArray = textArray
//   .map(str => str.trim().toLocaleLowerCase())
//   .filter(str => {
//     return (str.length !== 0)
//       && (str.length < 40) 
//       && !invalidChars.some(char => str.includes(char));
//   });
//   // console.log(textArray);
// copy(textArray);


// lokeshdhakar.com
// kottke.org
// wikipedia
// google.com/about
// zoom
// tesla
// pocket
// kayak
// youtube
// microsoft
```