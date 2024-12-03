import paths from './paths.js';

const inputOutput = {
  input: [`${paths.src}/Main.jsx`],
  output: {
    file: `${paths.build}/main.js`,
    name: 'main',
    format: 'iife',
    chunkFileNames() {
      return 'common.js'
    }
  },
}

export default inputOutput;