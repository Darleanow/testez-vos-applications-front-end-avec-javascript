import { retrieveSensorsDetailsData } from "./index";
import { isInTestEnv } from "../../env/index.js";
import { data } from "../../../../data/mock-facade-detail-data.js";

// Mocking the environment check function to control the test environment
jest.mock("../../env/index.js");

// Define a test suite for the retrieveSensorsDetailsData function
describe("retrieveSensorsDetailsData", () => {
  // Test case to ensure the function returns mock data when in a test environment
  it("should return mock data in a test environment", () => {
    // Mock the environment check to always return true for a test environment
    isInTestEnv.mockReturnValue(true);

    // Call the function and store the result
    const result = retrieveSensorsDetailsData();

    // Assert that the result matches the expected mock data
    expect(result).toEqual(data.facade);
  });
});
