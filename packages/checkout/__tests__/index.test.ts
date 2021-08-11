'use strict';

import { checkout } from '../src';

describe('checkout', () => {
  test('test', () => {
    expect(checkout('main', { targetPath: '.' })).toBe(undefined);
  });
});
