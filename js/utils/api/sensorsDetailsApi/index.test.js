import { retrieveSensorsDetailsData } from './index';
import { isInTestEnv } from '../../env/index.js';
import { data } from '../../../../data/mock-facade-detail-data.js';

jest.mock('../../env/index.js'); // Mocking the environment check function

describe('retrieveSensorsDetailsData', () => {
    it('should return mock data in test environment', () => {
        isInTestEnv.mockReturnValue(true);

        const result = retrieveSensorsDetailsData();
        expect(result).toEqual(data.facade);
    });
});
