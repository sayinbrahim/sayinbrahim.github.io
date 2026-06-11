// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sayinbrahim.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
