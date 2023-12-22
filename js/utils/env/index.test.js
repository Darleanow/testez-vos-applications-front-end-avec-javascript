const { isInTestEnv } = require("./index");

// Test suite for validating the environment check functionality
describe("Test suite for test environment check", () => {
  
  // Test to confirm the function returns true in a test environment
  it("should return true when in a test environment", () => {
    expect(isInTestEnv()).toBe(true);
  });

  // Test to confirm the function returns false when not in a test environment
  it("should return false if the environment isn't set to test", () => {
    process.env.NODE_ENV = "dev"; // Manually setting environment to dev
    expect(isInTestEnv()).toBe(false);
  });
});
