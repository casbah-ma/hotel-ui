import pkg from './package.json'
import path from 'path'
import copy from 'rollup-plugin-copy'
import { babel } from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import alias from '@rollup/plugin-alias'
const { getEntries } = require('./src/helpers/scriptsHelper')

export default {
  input: {
    index: 'src/index.js',
    ...getEntries('src/components'),
  },
  output: [
    {
      dir: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    peerDepsExternal(),
    alias({
      resolve: ['.js', '.jsx'],
      entries: [
        { find: '@/public', replacement: path.resolve(__dirname, './public') },
        { find: '@/src', replacement: path.resolve(__dirname, './src') },
        {
          find: '@/styles',
          replacement: path.resolve(__dirname, './src/styles'),
        },
        {
          find: '@/components',
          replacement: path.resolve(__dirname, './src/components'),
        },
        {
          find: '@/helpers',
          replacement: path.resolve(__dirname, './src/helpers'),
        },
        {
          find: '@/hooks',
          replacement: path.resolve(__dirname, './src/hooks'),
        },
      ],
    }),
    copy({
      targets: [{ src: 'withHotelUi.js', dest: 'dist' }],
    }),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs({ include: /node_modules/ }),
    babel({
      babelHelpers: 'runtime',
      exclude: ['node_modules/**', '**/*.stories.js', '**/*.test.js'],
      presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
    }),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      minimize: true,
    }),
    terser(),
  ],
  external: [
    '@babel/runtime',
    'react',
    'react-dom',
    'next',
    'styled-components',
    'react-dates',
  ],
}
