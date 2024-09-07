import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { resolve } from 'path';

const getESDir = () => {
  return resolve(__dirname, './dist/es');
};

const getLibDir = () => {
  return resolve(__dirname, './dist/lib');
};

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略不需要打包的文件
      external: ['vue', /\.less/],
      input: './src/index.ts',
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: getESDir()
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: getLibDir()
        }
      ]
    },
    lib: {
      entry: './src/index.ts',
      name: 'viewUI'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: resolve(__dirname, './dist/types'),
      tsConfigFilePath: './tsconfig.json',
      compilerOptions: {
        declarationDir: '.',
        preserveModules: true
      },
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/*.spec.ts', 'src/**/*.test.ts']
    }),
    DefineOptions(),
    {
      name: 'vite-plugin-replace-less-import',
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          // this.emitFile({
          //   type: 'asset',
          //   fileName: key, //文件名名不变
          //   source: bundler.code.replace(/\.less/g, '.css')
          // });

          if (bundler.type === 'chunk') {
            // 对于 chunk 类型，替换 code 属性
            if (typeof bundler.code === 'string') {
              bundler.code = bundler.code.replace(/\.less/g, '.css');
            }
          } else if (bundler.type === 'asset') {
            // 对于 asset 类型，替换 source 属性
            if (typeof bundler.source === 'string') {
              bundler.source = bundler.source.replace(/\.less/g, '.css');
            }
          }
        }
      }
    }
  ]
});
