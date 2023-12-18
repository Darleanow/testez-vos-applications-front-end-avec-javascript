import AddSensor from './index';

describe('AddSensor Component', () => {
    let renderedOutput;

    // Set up before each test
    beforeEach(() => {
        renderedOutput = AddSensor.render();
    });

    it('renders the main add-sensor-page container', () => {
        expect(renderedOutput).toContain('<div class="add-sensor-page">');
    });

    it('renders the Header component within the page', () => {
        expect(renderedOutput).toContain('<header class="main-header">');
    });

    it('contains a section title with correct text', () => {
        expect(renderedOutput).toContain('<h2 data-testid="add-sensor-title" class="section-title">Ajout d\'un nouveau capteur</h2>');
    });

    it('renders a form for adding a sensor', () => {
        expect(renderedOutput).toContain('<form class="add-sensor-form"');
    });

    it('form contains expected input fields', () => {
        const fieldNames = ['ID du capteur', 'Status du capteur', 'Marque du capteur', 'Lattitude du capteur', 'Longitude du capteur', 'ID du technicen'];
        fieldNames.forEach(name => {
            expect(renderedOutput).toContain(`<label for="">${name}</label>`);
        });
    });

    it('form contains a submit button', () => {
        expect(renderedOutput).toContain('<button class="submit-btn" type="submit">Ajouter le capteur</button>');
    });
});
