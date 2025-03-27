import esbuild from 'esbuild';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

esbuild
  .build({
    entryPoints: ['./src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    format: 'esm',
    sourcemap: process.env.NODE_ENV === 'development',
    target: 'esnext',
    plugins: [vanillaExtractPlugin()],
    external: ['react', 'react-dom'],
  })
  .catch(() => process.exit(1));
