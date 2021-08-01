import { execSync, ExecSyncOptionsWithBufferEncoding } from 'child_process';
import path from 'path';
import fs from 'fs-extra';

interface CommitOptions {
  shouldRemoveGit?: boolean;
  commitExecOptions?: ExecSyncOptionsWithBufferEncoding;
}

export function commit(
  commitPath: string,
  messages: string | string[],
  options: CommitOptions,
) {
  try {
    execSync('git add -A', { stdio: 'ignore' });

    messages = Array.isArray(messages) ? messages.join(' ') : messages;

    execSync(`git commit -m "${messages}"`, {
      stdio: 'ignore',
      ...options.commitExecOptions,
    });

    return true;
  } catch (e) {
    if (options.shouldRemoveGit) {
      console.warn('Git commit not created', e);
      console.warn('Removing .git directory...');

      try {
        // unlinkSync() doesn't work on directories.
        fs.removeSync(path.join(commitPath, '.git'));
      } catch (removeErr) {
        // Ignore.
      }
    }

    return false;
  }
}
