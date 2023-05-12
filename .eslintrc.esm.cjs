// .eslintrc.esm.js

import { aliases } from './vite.config';

const mappedAliases = Object.entries(aliases).map((entry) => entry);

const config = {
  // ...
  settings: {
    'import/resolver': {
      alias: {
        map: mappedAliases,
      },
    },
  },
};

export default config;
