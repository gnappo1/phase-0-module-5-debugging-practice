// Tests for the index.js file

describe('index.js', () => {
    describe('add()', () => {
        it('should correctly add two numbers', () => {
            expect(add(2, 3)).to.equal(5);
            expect(add(2, 0)).to.equal(2);
        });
    });

    describe('multiply()', () => {
        it('should correctly multiply two numbers', () => {
            expect(multiply(2, 3)).to.equal(6);
            expect(multiply(2, 0)).to.equal(0);
        });
    });

    describe('divide()', () => {
        it('should correctly divide two numbers', () => {
            expect(divide(6, 3)).to.equal(2);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => divide(6, 0)).to.throw('Division by zero');
        });
    });

    describe('findMax()', () => {
        it('should find the maximum number in an array', () => {
            expect(findMax([1, 3, 7, 4, 2])).to.equal(7);
            expect(findMax([-1, -3, -7, -4, -2, -10])).to.equal(-1);
        });
    });


    describe('calculateAverage()', () => {
        it('should calculate the average of numbers in an array', () => {
            expect(calculateAverage([1, 2, 3, 4, 5])).to.equal(3);
            expect(calculateAverage([1, 2, 3, 4, 5, 6])).to.equal(3.5);
        });
    });
});
