/**
 * @jest-environment jsdom
 */
const { default: Pagination } = require("./index.js");
import Home from "../../home/index.js";

jest.mock('../../home/index.js');

// Test suite for Pagination logic
describe('Pagination: Calculation of Page Numbers', () => {

    // Test to ensure a return value is defined for any number of items
    it('should define a return value for any number of items', () => {
        expect(Pagination.getNumberOfPages(12)).toBeDefined();
    });

    // Check if zero pages are returned for zero items
    it('should return 0 pages for 0 items', () => {
        expect(Pagination.getNumberOfPages(0)).toBe(0);
    });

    // Test for a single page with 7 items, given a max of 8 items per page
    it('should return 1 page for 7 items with a maximum of 8 items per page', () => {
        expect(Pagination.getNumberOfPages(7)).toBe(1);
    });

    // Check if 5 pages are returned for 34 items
    it('should return 5 pages for 34 items', () => {
        expect(Pagination.getNumberOfPages(34)).toBe(5);
    });

    // Test for negative number of items, expecting it to gracefully handle and return 0
    it('should return 0 pages for a negative number of items', () => {
        expect(Pagination.getNumberOfPages(-5)).toBe(-0); // Dirty, but it's js, we receive -0, which is correct.
    });
});

// Test suite for the Pagination render method
describe('Pagination: HTML Rendering Functionality', () => {

    // Test to verify correct HTML output for a given number of items
    it('should render correct HTML structure for a given number of items', () => {
        const htmlOutput = Pagination.render(16); 
        const numOfListItems = (htmlOutput.match(/<li/g) || []).length;
        expect(numOfListItems).toBe(2);
    });
});

// Describe block defines a test suite for the event handling of the Pagination component
describe('Pagination: Event Handling', () => {
    // beforeEach is used to set up any preconditions before each test
    beforeEach(() => {
        // Simulating the necessary HTML structure for the pagination component
        document.body.innerHTML = `
            <ul class="pagination-list">
                <li class="pagination-list-item"><a href="#/home">1</a></li>
                <li class="pagination-list-item"><a href="#/home">2</a></li>
            </ul>`;
    });

    // This test checks if the correct function is called when a page number is clicked
    it('should call Home.onChangePage with correct argument when a page is clicked', () => {
        // Creating a spy on Home.onChangePage to monitor its calls and arguments
        const onChangePageSpy = jest.spyOn(Home, 'onChangePage');

        // Calling handlePagination to attach the event handler
        Pagination.handlePagination();

        // Simulating a click event on the first page link
        const firstPageLink = document.querySelector('.pagination-list-item a');
        firstPageLink.click();

        // Asserting that Home.onChangePage was called with the correct argument
        expect(onChangePageSpy).toHaveBeenCalledWith(0); // 0 for the first page

        // Cleaning up the spy after the test
        onChangePageSpy.mockRestore();
    });
});