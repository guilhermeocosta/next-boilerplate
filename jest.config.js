module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['/src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatters: ['/node_modules/', '/.next/'],
};
