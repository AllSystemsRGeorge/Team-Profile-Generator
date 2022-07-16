const input = require('../lib/input.js');

describe('teamName', () => {
    it('retruns true if the input has at least 1 non-whitespace character', () => {
        expect(input.teamName('My Team')).toStrictEqual(true);
        expect(input.teamName(' My Team ')).toStrictEqual(true);
    });
    it('does not return true if the input has at least 1 non-whitespace character', () => {
        expect(input.teamName('')).not.toStrictEqual(true);
        expect(input.teamName(' ')).not.toStrictEqual(true);
    });
});

describe('')