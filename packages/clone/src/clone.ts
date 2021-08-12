import { spawn } from 'child_process';
import { promisify } from 'util';
import { processAsync } from './processAsync';
import { AnyObject, fn } from './typings';
import { checkout } from '@tinyfe/git-checkout';

export function clone(repo: string, targetPath: string, options?: AnyObject, cb?: fn) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
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

  // @ts-expect-error
  const process = spawn(git, args, options);

  processAsync(process, 'git-clone', (err, stdout, stderr) => {
    if (err) {
      cb && cb(err);
    } else {
      if (typeof options !== 'function' && options?.checkout) {
        // @ts-expect-error
        checkout(options.checkout, { targetPath, git }, cb);
      }

      cb && cb();
    }
  });
}

export const clonePromisify = promisify(clone);
