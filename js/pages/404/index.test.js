import Header from './index';

describe('Header Component', () => {
    let renderedOutput;

    beforeEach(() => {
        renderedOutput = Header.render();
    });

    it('renders the section correctly', () => {
        expect(renderedOutput).toContain('<section>');
        expect(renderedOutput).toContain('</section>');
    });

    it('renders the error text correctly', () => {
        expect(renderedOutput).toContain('<h1>Error Page</h1>');
    });

    it('renders the error message correctly', () => {
        expect(renderedOutput).toContain('<p>This is just a test of the error page</p>');
    });
});
