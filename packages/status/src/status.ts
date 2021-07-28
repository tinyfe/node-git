import { execSync } from 'child_process';

export function status() {
  try {
    let stdout = execSync(`git status --porcelain`, {
      stdio: ['pipe', 'pipe', 'ignore'],
    }).toString();

    return stdout.trim();
  } catch (e) {
    return '';
  }
}
