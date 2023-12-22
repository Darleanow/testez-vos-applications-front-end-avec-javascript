/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import Home from './index.js';
import Pagination from '../common/pagination/index.js';
import { ITEMS_PER_PAGE } from '../../constants.js';
import { findComponentByPath } from "../../utils/findComponentsByPath/index.js";

jest.mock('../common/pagination/index.js');

const routes = [
    { path: '/home', component: 'HomeComponent' },
];

describe('Home Component', () => {
    // Creating mock data for sensors
    const mockSensors = new Array(10).fill(null).map((_, index) => ({
        id: index + 1,
        img: `sensor${index + 1}.jpg`,
        location: `Location ${index + 1}`,
        status: 'actif'
    }));

    beforeEach(() => {
        // Setting up the mock DOM and resetting the offset before each test
        document.body.innerHTML = `<div id="root"><div class="sensors-wrapper"></div></div>`;
        Home.offset = 0;

        // Mocking Home.render and Pagination.handlePagination
        Home.render = jest.fn().mockResolvedValue(`<div>New Content</div>`);
        Pagination.handlePagination = jest.fn();
    });

    // Test for renderSensorsCard function
    it('should render correct number of sensor cards based on offset and ITEMS_PER_PAGE', () => {
        const renderedHtml = Home.renderSensorsCard(mockSensors);
        const matches = renderedHtml.match(/class="sensor-card"/g);

        expect(matches).toHaveLength(ITEMS_PER_PAGE);
    });

    // Test for onChangePage function
    it('should update content and handle pagination on page change', async () => {
        const newOffset = 10;
        await Home.onChangePage(newOffset);

        expect(Home.offset).toBe(newOffset);
        expect(Home.render).toHaveBeenCalled();
        expect(document.querySelector("#root").innerHTML).toContain("New Content");
        expect(Pagination.handlePagination).toHaveBeenCalled();
    });

    it('should return the correct route for an exact path match', () => {
        const result = findComponentByPath('/home', routes);
        expect(result).toEqual({ path: '/home', component: 'HomeComponent' });
    });

});
