import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: vercel(), 
    prerender: {
      entries: ['*'] 
    }
  },
  preprocess: vitePreprocess()
};

export default config;
