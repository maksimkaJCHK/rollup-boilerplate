import { terser } from "rollup-plugin-terser";
import sizes from "rollup-plugin-sizes";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";

import inputOutput from './services/input-output';
import bPlugins from './services/plugins';

const plugins = bPlugins();

export default {
  ...inputOutput,
  plugins: [
    ...plugins,
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