import { findComponentByPath } from ".";

// Sample route data for testing
const routes = [
    { path: '/home', component: 'HomeComponent' },
];

// Test suite for findComponentByPath function
describe('findComponentByPath', () => {
    // Test to find a route with an exact match
    it('should return the correct route for an exact path match', () => {
        const result = findComponentByPath('/home', routes);
        expect(result).toEqual({ path: '/home', component: 'HomeComponent' });
    });

    // Test to return undefined for a non-existing path
    it('should return undefined for a path that does not exist', () => {
        const result = findComponentByPath('/non-existing-path', routes);
        expect(result).toBeUndefined();
    });
});
