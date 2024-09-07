import { series } from 'gulp';
import { rootPath, runCommand } from '../utils';

export const publishComponent = async () => {
  runCommand('release-it', rootPath);
};
export default series(async () => publishComponent());
