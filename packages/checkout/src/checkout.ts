import { spawn } from 'child_process';
import { processAsync } from './processAsync';
import { promisify } from 'util';
import { fn } from './typings';

export function checkout(checkout: string, { targetPath = '', git = '' } = {}, cb?: fn) {
  const args = ['checkout', checkout];

  const process = spawn(git, args, { cwd: targetPath });

  processAsync(process, 'git-checkout', cb!);
}

export const checkoutPromisify = promisify(checkout);
