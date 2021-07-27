'use strict';

import { add } from '../src';

describe('node git about add', () => {
  test('git add', () => {
    expect(add('')).toBe(false);
  });
});
