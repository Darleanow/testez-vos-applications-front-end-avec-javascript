import AddSensor from './index';

// Defining the test suite for AddSensor Component
describe('AddSensor Component', () => {
    let renderedOutput;

    // Setup before each test
    beforeEach(() => {
        // Rendering the AddSensor component and storing its output
        renderedOutput = AddSensor.render();
    });

    // Test to check if the main add-sensor-page container is rendered
    it('should render the main add-sensor-page container', () => {
        expect(renderedOutput).toContain('<div class="add-sensor-page">');
    });

    // Test to ensure the Header component is rendered within the page
    it('should render the Header component within the page', () => {
        expect(renderedOutput).toContain('<header class="main-header">');
    });

    // Test to verify the section title with correct text is rendered
    it('should contain a section title with correct text', () => {
        expect(renderedOutput).toContain('<h2 data-testid="add-sensor-title" class="section-title">Ajout d\'un nouveau capteur</h2>');
    });

    // Test to check if a form for adding a sensor is rendered
    it('should render a form for adding a sensor', () => {
        expect(renderedOutput).toContain('<form class="add-sensor-form"');
    });

    // Test to ensure the form contains expected input fields
    it('should contain expected input fields in the form', () => {
        const fieldNames = ['ID du capteur', 'Status du capteur', 'Marque du capteur', 'Lattitude du capteur', 'Longitude du capteur', 'ID du technicen'];
        fieldNames.forEach(name => {
            expect(renderedOutput).toContain(`<label for="">${name}</label>`);
        });
    });

    // Test to check if the form contains a submit button
    it('should contain a submit button in the form', () => {
        expect(renderedOutput).toContain('<button class="submit-btn" type="submit">Ajouter le capteur</button>');
    });
});
