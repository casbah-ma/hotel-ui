const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-tailwind-dark-mode',
    '@mediamonks/muban-storybook-addon-transition',
    "storybook-addon-next-router",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    const { plugins, module } = config
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@/components': path.resolve(__dirname, '../src/components'),
          '@/styles': path.resolve(__dirname, '../src/styles'),
          '@/hooks': path.resolve(__dirname, '../src/hooks'),
          '@/helpers': path.resolve(__dirname, '../src/helpers'),
        },
      },
    }
  },
}
