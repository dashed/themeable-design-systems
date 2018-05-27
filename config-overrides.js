// https://github.com/timarney/react-app-rewired

// 3rd-party imports

const { injectBabelPlugin } = require('react-app-rewired');

// overrides

module.exports = function override(config, env) {
  // https://github.com/storybooks/babel-plugin-react-docgen

  config = injectBabelPlugin(
    [
      'babel-plugin-react-docgen',
      {
        resolver: 'findAllExportedComponentDefinitions'
      }
    ],
    config
  );

  return config;
};
