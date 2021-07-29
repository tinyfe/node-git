import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs-extra';

export function commit(commitPath: string) {
  try {
    execSync('git add -A', { stdio: 'ignore' });
    execSync('git commit -m "Initialize project using Create React App"', {
      stdio: 'ignore',
    });

    return true;
  } catch (e) {
    // We couldn't commit in already initialized git repo,
    // maybe the commit author config is not set.
    // In the future, we might supply our own committer
    // like Ember CLI does, but for now, let's just
    // remove the Git files to avoid a half-done state.
    console.warn('Git commit not created', e);
    console.warn('Removing .git directory...');

    try {
      // unlinkSync() doesn't work on directories.
      fs.removeSync(path.join(commitPath, '.git'));
    } catch (removeErr) {
      // Ignore.
    }
    return false;
  }
}
