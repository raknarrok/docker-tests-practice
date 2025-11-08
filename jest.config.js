module.exports = {
  testEnvironment: 'node',
  collectCoverage: false,
  testMatch: [
    "**/test/**/*.test.js",
    "**/__tests__/**/*.js"
  ],
  forceExit: true,
  clearMocks: true,
  maxWorkers: 1,
  workerIdleMemoryLimit: '512MB'
};