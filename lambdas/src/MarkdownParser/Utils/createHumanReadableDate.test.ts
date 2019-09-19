import {assert} from 'chai';

import createHumanReadableDate from './createHumanReadableDate';

describe('createHumanReadableDate', () => {
    it('should parse unix into a readable date', () => {
        const actual = createHumanReadableDate(new Date(1538523952846));
        const expected = 'Oct 3, 2018';

        assert.equal(actual, expected);
    });
});
