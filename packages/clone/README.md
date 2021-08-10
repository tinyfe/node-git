# `@tinyfe/git-clone`

> commander about git clone

## Usage

```js
import { clone, clonePromisify } from '@tinyfe/git-clone';

clone('Rain120/mini-webpack', './', () => {
  console.log('done');
});

// promise that clone
const download = async () => {
  await clonePromisify('Rain120/mini-webpack', './');
};

download();
```
