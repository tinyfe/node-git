import { spawnSync } from 'child_process';
import path from 'path';

export function add(addPath: string) {
  if (!addPath) {
    return false;
  }

  try {
    spawnSync(
      'git',
      ['add', path.join(addPath, 'config'), path.join(addPath, 'scripts')],
      {
        stdio: 'inherit',
      },
    );

    return true;
  } catch (e) {
    return false;
  }
}
