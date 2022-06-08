module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(png|pdf|svg|jpg|jpeg)$': '<rootDir>/jest/__mocks__/fileMock.js',
        '\\.(css|styl|less|sass|scss|svg)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
    testMatch: ['<rootDir>/**/*.test.(js|jsx|ts|tsx)'],
    transformIgnorePatterns: ['<rootDir>/node_modules/', 'dist', 'build', 'types'],
    transform: {
        "\\.[jt]sx?$":  [ 'esbuild-jest', { 
            sourcemap: true,
            loaders: {
              '.spec.js': 'jsx',
              '.js': 'jsx'
            }
          }
        ]
      },
      moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}

