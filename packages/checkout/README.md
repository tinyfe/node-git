# `@tinyfe/git-checkout`

> commander about git checkout

## Usage

```js
import { checkout, checkoutPromisify } from '@tinyfe/git-checkout';

checkout('main', { targetPath: '.' }, () => {
  console.log('checkout finished)
});

// promise that checkout
const checkoutIt = async () => {
  await checkoutPromisify('main', { targetPath: '.' });
};

checkoutIt();
```
