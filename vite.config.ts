import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import { resolve } from 'path'
import FullReload from "vite-plugin-full-reload"
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(["app/views/**/*.erb"],),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(resolve(__dirname, 'config/tailwind.config.js')),
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'app/assets'),
    },
  },
})
