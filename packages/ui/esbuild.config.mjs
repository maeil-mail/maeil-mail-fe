import esbuild from 'esbuild';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import svgr from 'esbuild-plugin-svgr';
import { preserveDirectivesPlugin } from 'esbuild-plugin-preserve-directives';

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outdir: 'dist',
    platform: 'node',
    minify: true,
    treeShaking: true,
    allowOverwrite: true,
    format: 'esm',
    sourcemap: process.env.NODE_ENV === 'development',
    target: 'esnext',
    loader: { '.css': 'file' },
    plugins: [
      svgr(),
      vanillaExtractPlugin(),
      preserveDirectivesPlugin({
        directives: ['use client', 'use strict'],
        include: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
      }),
    ],
    external: ['react', 'react-dom', '@uiw/react-markdown-preview', '@mdxeditor/editor'],
  })
  .catch(() => process.exit(1));
