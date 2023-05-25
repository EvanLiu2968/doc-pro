import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
// import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers';

export default ({ mode }) => {
  const { VITE_PROXY_URL } = loadEnv(mode, process.cwd());
  return defineConfig({
    base: './',
    plugins: [
      vue(),
      Components({
        resolvers: [
          ElementPlusResolver(),
          VantResolver()
        ],
      }),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    server: {
      port: 7008,
      open: true,
      host:'0.0.0.0',
      hmr: {
        host:'127.0.0.1',
        port: 7009
      },
      proxy: {
        '^/gezida-api': {
          target: VITE_PROXY_URL,
          changeOrigin: true,
          bypass(req, res) {
            req.headers['cookie'] = 'JSESSIONID=AA7018A5139235278CD96B22E410E27F'
          },
          rewrite: (path) => path.replace(/^\/gezida-api/, '')
        }
      }
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: 'es2015',
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    }
  })
}
