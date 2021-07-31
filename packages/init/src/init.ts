import { execSync } from 'child_process';
import { isInGitRepository, isInMercurialRepository } from '@tinyfe/git-repo';

export function init() {
  try {
    execSync('git --version', { stdio: 'ignore' });
    if (isInGitRepository() || isInMercurialRepository()) {
      return false;
    }

    execSync('git init', { stdio: 'ignore' });

    return true;
  } catch (e) {
    console.warn('Git repo not initialized', e);

    return false;
  }
}
