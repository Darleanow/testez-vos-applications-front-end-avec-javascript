const { default: Pagination } = require("./index.js");

describe('Test suite for Pagination', () => {
    it('Test number of sensors return value', () => {
        expect(Pagination.getNumberOfPages(12)).toBeDefined();
    });

    it('Test number of pages returned when 0 sensors', () => {
        expect(Pagination.getNumberOfPages(0)).toBe(0);
    });

    it('Test One page with 7 sensors (8 per page max)', () => {
        expect(Pagination.getNumberOfPages(7)).toBe(1);
    });

    it('Test 5 pages for 34 sensors', () => {
        expect(Pagination.getNumberOfPages(34)).toBe(5);
    });
})