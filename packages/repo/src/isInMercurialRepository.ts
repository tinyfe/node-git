import { execSync } from 'child_process';

/**
 * @description 分布式版本控制的仓库
 * @link https://www.mercurial-scm.org/wiki/ChineseQuickStart
 * @returns boolean
 */
export function isInMercurialRepository() {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}
