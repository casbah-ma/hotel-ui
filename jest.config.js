module.exports = {
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

    //make jest aware of path aliases
    '^@/src(.*)$': '<rootDir>/src$1',
    '^@/styles(.*)$': '<rootDir>/src/styles$1',
    '^@/helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/pages(.*)$': '<rootDir>/src/pages$1',
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!swiper|ssr-window|dom7)',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
