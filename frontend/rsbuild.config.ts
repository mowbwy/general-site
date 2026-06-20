import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: "/general-site",
    publicPath: "/general-site",
  },
  html: {
    title: 'Joseph Alvayero Portfolio',
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    template: './public/index.html',
  },
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  server: {
    historyApiFallback: true,
  },
});
