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