'use strict';

import { isInGitRepository, isInMercurialRepository } from '../src';

describe('node git about repo', () => {
  test('isInGitRepository', () => {
    expect(isInGitRepository()).toBe(false);
  });

  test('isInMercurialRepository', () => {
    expect(isInMercurialRepository()).toBe(false);
  });
});
