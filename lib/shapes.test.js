const { describe } = require('yargs');
const shapes = require('./shapes');

describe('shapes', () => {
    describe('Square', () => {
        it('should return a square', () => {
            const square = new shapes.Square('ABC', 'red');
            expect(square.draw()).toEqual('<rect x="0" y="0" width="200" height="200" fill="red" />');
        });
    });
    describe('Circle', () => {
        it('should return a circle', () => {
            const circle = new shapes.Circle('ABC', 'red');
            expect(circle.draw()).toEqual('<circle cx="100" cy="100" r="100" fill="red" />');
        });
    });
    describe('Triangle', () => {
        it('should return a triangle', () => {
            const triangle = new shapes.Triangle('ABC', 'red');
            expect(triangle.draw()).toEqual('<polygon points="100,0 200,200 0,200" fill="red" />');
        });
    });
    describe('Pentagon', () => {
        it('should return a pentagon', () => {
            const pentagon = new shapes.Pentagon('ABC', 'red');
            expect(pentagon.draw()).toEqual('<polygon points="100,0 200,75 160,200 40,200 0,75" fill="red" />');
        });
    });
    describe('Hexagon', () => {
        it('should return a hexagon', () => {
            const hexagon = new shapes.Hexagon('ABC', 'red');
            expect(hexagon.draw()).toEqual('<polygon points="100,0 200,50 200,150 100,200 0,150 0,50" fill="red" />');
        });
    });
    describe('Octagon', () => {
        it('should return a octagon', () => {
            const octagon = new shapes.Octagon('ABC', 'red');
            expect(octagon.draw()).toEqual('<polygon points="100,0 180,40 200,100 180,160 100,200 20,160 0,100 20,40" fill="red" />');
        });
    });
    describe('Star', () => {
        it('should return a star', () => {
            const star = new shapes.Star('ABC', 'red');
            expect(star.draw()).toEqual('<polygon points="100,0 129,75, 200,75 144,125 166,200 100,150 34,200 56,125 0,75 71,75" fill="red" />');
        })
    });
    describe('Heart', () => {
        it('should return a heart', () => {
            const heart = new shapes.Heart('ABC', 'red');
            expect(heart.draw()).toEqual('<path d="M100,0 Q150,0 150,50 Q150,100 100,150 Q50,100 50,50 Q50,0 100,0" fill="red" />');
        })
    });
    describe('Diamond', () => {
        it('should return a diamond', () => {
            const diamond = new shapes.Diamond('ABC', 'red');
            expect(diamond.draw()).toEqual('<polygon points="100,0 200,100 100,200 0,100" fill="red" />');
        })
    });
});

