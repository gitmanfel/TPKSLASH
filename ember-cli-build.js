'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const isProduction = EmberApp.env() ==='production';

const purgecss ={
  module: require('@fullhuman/postcss-purgecss'),
  Option:{
    content: [
      './app/index.html',
      './app/templates/**/*.hbs'
    ],
    defaultExtractor: content => content.match(/[A-Z-z0-9-_:/]+/g) || []
  }
}

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions:{
      compile: {
      plugins:[{
        module: require('postcss-import'),
        Option: {
          path: ['node_module']
        }
      },
      require('tailwindcss')('./app/tailwind/config.js'),
      ...isProduction ? [purgecss] : []

      ]
    }
  }});

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
