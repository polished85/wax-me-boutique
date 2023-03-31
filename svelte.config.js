import node from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: node({ env: { port: process.env.PORT } }),
		files: {
			lib: 'src/components'
		}
	}
};

export default config;
