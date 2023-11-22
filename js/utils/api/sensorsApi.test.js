import { data } from "../../../data/mock-homepage-data";
const { retrieveSensorsData } = require("./sensorsApi");

describe("Test Suite for sensor API", () => {
  it("Test mock equals retrieve data", () => {
    expect(retrieveSensorsData()).toBe(data.facades);
  });
});
