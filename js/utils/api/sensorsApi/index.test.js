import { data } from '../../../../data/mock-homepage-data'

// Import the function to be tested from the index file
import { retrieveSensorsData } from './index'

// Define a test suite for the Sensors API functionality
describe('Sensors API Unit Test Suites', () => {
    // Test case to verify if the retrieveSensorsData function returns the correct mock data
    it('should return the mocked data for sensors', () => {
        // Expect the function to return data that matches the predefined mock data
        expect(retrieveSensorsData()).toBe(data.facades)
    })
})
