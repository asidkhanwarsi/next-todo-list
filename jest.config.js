const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Ensure this is correct
  moduleNameMapper: {
    // Handle module aliases (same as in next.config.js)
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
