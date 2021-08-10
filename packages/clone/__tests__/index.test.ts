'use strict';

import { clone, clonePromisify } from '../src';

describe('clone', () => {
  test('git clone test', () => {
    expect(
      clone('Rain120/mini-webpack', './', () => {
        console.log('done');
      }),
    ).toBe(undefined);
  });
});
