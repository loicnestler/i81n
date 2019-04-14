# i81n
> An ultra lightweight translation library using tagged template literals.

#### Usage
The translate function is stored in `global['t']` by default.
The default language is `en_EN`.

```javascript
const i81n = require('i81n')()

i81n.addTranslations('en_EN', {
   hello: 'Hello',
   bye: 'Goodbye'
})

i81n.addTranslations('de_DE', {
   hello: 'Hallo',
   bye: 'Auf Wiedersehen'
})

i81n.addTranslations('fr_FR', {
   hello: 'Bonjour',
   bye: 'Au Revoir'
})


console.log(t`hello`)
// => 'Hello'


i81n.setLanguage('de_DE')

console.log(t`bye`)
// => 'Auf Wiedersehen'


i81n.setLanguage('fr_FR')

console.log(t`hello`)
// => 'Bonjour'

console.log(t`unknown translation`)
// => 'unknown translation'

```