# i18n

This is a simple i18n module.

## Usage

```js
import { i18n } from 'utils/i18n';

//object example
const translations = {
  en: {
    hello: 'Hello',
    world: 'World',
  },
  es: {
    hello: 'Hola',
    world: 'Mundo',
  },
};

//usage
const i18nEn = i18n('en', translations);
const i18nEs = i18n('es', translations);

console.log(i18nEn('hello')); //Hello
console.log(i18nEs('hello')); //Hola
```

```ts
const translations = {
  en: {
    hello: 'Hello',
    world: 'World',
  },
  es: {
    hello: 'Hola',
    world: 'Mundo',
  },
};

//usage
import { i18nMiddleware } from '@/utils/i18n';
import translations from '@/translations';

bot.use(i18nMiddleware(translations));
```
