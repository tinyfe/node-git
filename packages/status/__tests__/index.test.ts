'use strict';

import { status } from '../src';

describe('node git about status', () => {
  test('git status', () => {
    expect(status()).toBe(false);
  });
});
