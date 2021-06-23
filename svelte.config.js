import preprocess from 'svelte-preprocess'
import path from 'path'
import adapter from '@sveltejs/adapter-static'

console.log(process.env.NODE_ENV)
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
    target: '#svelte',
    prerender: {
      crawl: true,
      enabled: true,
      force: true,
      pages: ['*']
    },
    router: process.env.NODE_ENV === 'development',
    hydrate: process.env.NODE_ENV === 'development',
    vite: {
      server: {
        hmr: {
          port: 23456
        }
      },
      resolve: {
        alias: {
          $components: path.resolve('./src/components/'),
          $store: path.resolve('./src/store/index.ts')
        }
      }
    }
  }
}
