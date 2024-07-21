
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>/test'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.js$': 'babel-jest'
    }
  };
  