'use strict';

import { commit } from '../src';

describe('node git about commit', () => {
  test('git commit', () => {
    expect(commit('../', 'feat: Created git commit.')).toBe(undefined);
  });
});
