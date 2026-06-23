import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()], 
  output: {
    assetPrefix: "/general-site/",
    publicPath: '/general-site/',
    distPath: {
      root: "docs",
    },
  },
  html: {
    title: "Joseph's Webpage",
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
