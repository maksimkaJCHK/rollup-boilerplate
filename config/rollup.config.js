import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import autoprefixer from 'autoprefixer';
import alias from '@rollup/plugin-alias';
import appRoot from 'app-root-path';
import path from 'path';

import paths from './paths';

export default {
  input: [`${paths.src}/Main.js`],
  output: {
    file: `${paths.build}/main.js`,
    name: 'main',
    format: 'iife',
    sourcemap: 'inline',
    chunkFileNames() {
      return 'common.js'
    }
  },
  plugins: [
    serve({
      open: true,
      openPage: '',
      contentBase: ['public'],
      host: 'localhost',
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
    livereload({
      watch: `${path.build}`,
    }),
    replace({
      preventAssignment: true,
      'process.browser': true,
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    resolve({
      extensions: ['.js', '.jsx'],
      browser: true,
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(appRoot.path, 'src'), 
        },
      ]
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
              "chrome": "80",
              "edge": "80"
            }
          }
        ],
      ]
    }),
  ]
};