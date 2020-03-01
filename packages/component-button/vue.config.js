const argv = require('yargs').argv;
const isServeMode = argv._[0] === 'serve';
const path = require('path');

// vue.config.js
module.exports = {

  configureWebpack: config => {

    let defaults = {
    };

    if (isServeMode) {
      return  {
        ...defaults,
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js'
          }
        }
      }

    }

    return defaults;

  },
};
