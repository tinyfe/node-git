import { execSync } from 'child_process';

/**
 * @description 是否是一个 git 仓库
 * @returns boolean
 */
export function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });

    return true;
  } catch (e) {
    return false;
  }
}
