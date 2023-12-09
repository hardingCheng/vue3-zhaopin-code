import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), eslintPlugin()],
	// 配置代理
	server: {
		proxy: {
			'/api': 'https://api.imooc.zcwytd.com',
		},
		cors: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
});
