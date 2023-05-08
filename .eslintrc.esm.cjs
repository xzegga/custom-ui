// .eslintrc.esm.js

import { aliases } from './vite.config';

const mappedAliases = Object.entries(aliases).map((entry) => entry); // [[alias, path], [alias, path], ...]

export default {
  // ...
  settings: {
    'import/resolver': {
      alias: {
        map: mappedAliases,
      },
    },
  },
};
