import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

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
          // UMD格式配置
          format: 'umd',
          entryFileNames: 'viewUI.umd.js',
          name: 'viewUI', // 这应该与lib.name保持一致
          globals: {
            vue: 'Vue' // 指定外部依赖的全局变量名
          },
          dir: resolve(__dirname, './dist/umd')
        }
      ]
    },
    lib: {
      entry: './src/index.ts',
      name: 'viewUI',
      formats: ['umd']
    }
  },
  plugins: [
    vue(),
    DefineOptions(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (chunk) => chunk.fileName === 'viewUI.umd.js',
    }),
  ]
});
