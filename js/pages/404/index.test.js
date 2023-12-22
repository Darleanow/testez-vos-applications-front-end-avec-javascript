import Header from './index';

// Describing test suite for the Header Component
describe('Header Component', () => {
    let renderedOutput;

    // Before each test, render the Header component and store its output
    beforeEach(() => {
        renderedOutput = Header.render();
    });

    // Test to check if the header section is rendered correctly
    it('should correctly render the header section', () => {
        // Checking for the opening and closing of the section tag
        expect(renderedOutput).toContain('<section>');
        expect(renderedOutput).toContain('</section>');
    });

    // Test to ensure the error title is rendered correctly
    it('should correctly render the error title', () => {
        // Verifying the presence of the error title in h1 tag
        expect(renderedOutput).toContain('<h1 data-testid="error-page-title">Error Page</h1>');
    });

    // Test to verify if the error message is rendered correctly
    it('should correctly render the error message', () => {
        // Checking for the specific error message in a paragraph tag
        expect(renderedOutput).toContain('<p>This is just a test of the error page</p>');
    });
});
