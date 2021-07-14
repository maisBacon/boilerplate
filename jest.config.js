const tsPreset = require('ts-jest/jest-preset')

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/main/server.ts',
    '!<rootDir>/src/main/config/env.ts'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  testResultsProcessor: 'jest-sonar-reporter',
  ...tsPreset,
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  },
  watchPathIgnorePatterns: [
    'globalConfig'
  ],
  setupFiles: [
    'dotenv/config',
    '<rootDir>/jest.setup.js'
  ]
}
