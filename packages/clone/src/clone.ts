import { ChildProcess, spawn } from 'child_process';
import { promisify } from 'util';
import { processAsync } from './processAsync';
import { fn } from './typings';
import { checkout } from '@tinyfe/git-checkout';

export function clone(repo: string, targetPath: string, options?: any, cb?: fn) {
  if (typeof options === 'function') {
    options = null;
    cb = options as unknown as fn;
  }

  options = options || {
    checkout: false,
  };

  const git = options.git || 'git';
  const args = ['clone'];

  if (options.shallow) {
    args.push('--depth');
    args.push('1');
  }

  args.push('--');
  args.push(repo);
  args.push(targetPath);

  const process = spawn(git, args, options);

  processAsync(process as ChildProcess, 'git-clone', (err, stdout, stderr) => {
    if (err) {
      cb && cb(err);
    } else {
      if (typeof options !== 'function' && options?.checkout) {
        checkout(options.checkout, { targetPath, git }, cb);
      }

      cb && cb();
    }
  });
}

export const clonePromisify = promisify(clone);
