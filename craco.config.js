const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'@': path.join(__dirname, './src')
		}
	},
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: (lessRule, context) => {
          lessRule.exclude = undefined;
          return lessRule;
        },
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};