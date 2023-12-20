import Header from './index';

describe('Header Component', () => {
    let renderedOutput;

    beforeEach(() => {
        renderedOutput = Header.render();
    });

    it('renders the header correctly', () => {
        expect(renderedOutput).toContain('<header class="main-header">');
        expect(renderedOutput).toContain('</header>');
    });

    it('contains a main header title with correct text', () => {
        expect(renderedOutput).toContain('<h1 class="main-header-title">');
        expect(renderedOutput).toContain('Façadia');
    });

    it('contains a navigation list', () => {
        expect(renderedOutput).toContain('<ul class="main-nav">');
    });

    it('renders correct number of navigation items', () => {
        const matches = renderedOutput.match(/<li class="main-nav-item/g);
        expect(matches).toHaveLength(4);
    });

    it('contains correct navigation links with texts', () => {
        expect(renderedOutput).toContain('href="#/home">Accueil</a>');
        expect(renderedOutput).toContain('href="#">Le projet</a>');
        expect(renderedOutput).toContain('href="#/add-sensor">Ajouter un capteur</a>');
        expect(renderedOutput).toContain('href="/">Se Déconnecter</a>');
    });

});
