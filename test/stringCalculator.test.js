const {add} = require('../src/stringCalculator');

describe('String Calculator', () => {
    describe('add', () => {
        it('should return 0 for empty string', () => {
            expect(add('')).toBe(0);
        });
        
        it('should return 1 for single number', () => {
            expect(add("1")).toBe(1);
        });

        it('should return sum for two numbers', () => {
            expect(add("1,5")).toBe(6);
        });

        it('should handle multiple numbers', () => {
            expect(add("1,2,3,4")).toBe(10);
        });

        it('should handle new lines between numbers', () => {
            expect(add("1\n2,3")).toBe(6);
        });

        it('should handle custom delimiter', () => {
            expect(add("//;\n1;2")).toBe(3);
        });

        it('should throw exception for negative numbers', () => {
            expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
        });
    });
});