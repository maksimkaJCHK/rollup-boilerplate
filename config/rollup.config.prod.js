import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import sizes from "rollup-plugin-sizes";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import autoprefixer from 'autoprefixer';
import path from './path';

export default {
  input: `${path.src}/index.js`,
  output: {
    file: `${path.build}/main.js`,
    name: 'main',
    format: 'iife',
    chunkFileNames() {
      return 'common.js'
    }
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      extensions: ['.js', '.jsx'],
      browser: true,
    }),
    postcss({
      plugins: [
        autoprefixer(),
        url({
          url: "inline",
          maxSize: 10,
          fallback: "copy",
        }),
      ],
    }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        "@babel/preset-react",
      ],
      plugins: [],
      exclude: 'node_modules/**',
    }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        [
          "@babel/preset-env",
          {
            "debug": false,
            "useBuiltIns": "entry",
            "modules": false,
            "corejs": 3,
            "targets": {
              "chrome": "58",
              "ie": "11"
            }
          }
        ],
      ]
    }),
    terser({
      output: {
        comments: false,
      },
      compress: {
        drop_console: true,
      },
    }),
    sizeSnapshot(),
    sizes(),
  ],
};