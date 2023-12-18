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

describe('Test suite for Pagination render method', () => {
    it('Test if correct HTML is rendered for a given number of sensors', () => {
        // Assuming ITEMS_PER_PAGE is known (e.g., 8)
        const htmlOutput = Pagination.render(16); // Should create 2 pages
        const numOfListItems = (htmlOutput.match(/<li/g) || []).length;
        expect(numOfListItems).toBe(2);
        // Additional checks can be added here to validate the structure of the HTML string
    });
});

