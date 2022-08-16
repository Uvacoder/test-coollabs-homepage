import preprocess from 'svelte-preprocess'
import path from 'path'
import adapter from '@sveltejs/adapter-static'


/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: [
    preprocess({
      postcss: true
    })
  ],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    prerender: {
      default: true,
    },
    browser: {
      router: process.env.NODE_ENV === 'development',
      hydrate: process.env.NODE_ENV === 'development',
    }
  }
}
