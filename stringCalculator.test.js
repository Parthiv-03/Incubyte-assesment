const {add} = require('./stringCalculator');

describe('String Calculator', () => {
    describe('add', () => {
        it('should return 0 for empty string', () => {
            expect(add('')).toBe(0);
        });
    });
});