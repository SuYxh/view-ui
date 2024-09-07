import { series, parallel, src, dest } from 'gulp';
import { deleteFileByPath, rootPath, runCommand } from '../utils';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import { glob } from 'glob';
import { unlink } from 'fs/promises';

// 删除 dist 目录
export const removeDist = () => {
  const distPath = `${rootPath}/dist`;
  return deleteFileByPath(distPath)
    .then(() => {
      console.log('删除 dist 目录成功');
    })
    .catch((err) => {
      console.log('删除 dist 目录失败', err);
    });
};

// 打包组件
export const buildComponent = async () => {
  return runCommand('pnpm run build:component', rootPath)
    .then((res) => {
      console.log('打包组件成功');
    })
    .catch((err) => {
      console.log('打包组件 error', err);
    });
};

export const buildUmdComponent = async () => {
  return runCommand('pnpm run build:umd', rootPath)
    .then((res) => {
      console.log('打包 umd 组件成功');
    })
    .catch((err) => {
      console.log('打包 umd 组件 error', err);
    });
};

//打包样式
export const buildStyle = () => {
  return src(`${rootPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${rootPath}/dist/lib`))
    .pipe(dest(`${rootPath}/dist/es`))
    .on('end', () => console.log('Style build completed'));
};

export const copyFiles = async () => {
  return src([`${rootPath}/README.md`, `${rootPath}/package.json`]).pipe(
    dest(`${rootPath}/dist`)
  );
};

export const cleanupVue2Files = async () => {
  const files = await glob(`${rootPath}/dist/**/*.vue2.js`);
  for (const file of files) {
    await unlink(file);
  }
};

export default series(
  // 删除 dist 目录
  async () => removeDist(),
  // 打包组件
  async () => buildComponent(),
  // 删除 dist 目录下的 vue2 文件
  async () => cleanupVue2Files(),
  // 打包样式
  async () => buildStyle(),
  // 打包 umd 组件
  async () => buildUmdComponent(),
  // 复制文件
  async () => copyFiles()
);
