import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: "/",
  },
  html: {
    title: 'General Site',
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    template: './public/index.html',
  },
});
