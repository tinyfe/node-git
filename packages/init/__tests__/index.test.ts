'use strict';

import init from '../src';

describe('node git about init', () => {
  test('git init', () => {
    expect(init()).toBe(undefined);
  });
});
