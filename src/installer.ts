import * as exec from '@actions/exec';
import * as path from 'path';
import * as semver from 'semver';

export async function installPhp(version: string) {
  if (process.platform === 'linux') {
    if (Number(version) >= 5.6) {
      await exec.exec(path.join(__dirname, 'install-php-ubuntu.sh'), [version]);
    } else {
      await exec.exec(path.join(__dirname, 'install-old-php-ubuntu.sh'), [
        version
      ]);
    }
  } else if (process.platform === 'win32') {
    await exec.exec(
      'powershell -File ' +
        path.join(__dirname, 'install-php-windows.ps1 -version ' + version)
    );
  }
}
