const shapes = require('./shapes');

// Test for shapes from lib\shapes.js

describe('Circle', () => {
    it ('should return a circle', () => {
        const circle = new shapes.Circle('A', 'red');
        expect(circle.draw()).toBe('<circle cx="100" cy="100" r="100" stroke-width="3" fill="red" />');
    });
});

describe('Square', () => {
    it ('should return a square', () => {
        const square = new shapes.Square('B', 'blue');
        expect(square.draw()).toBe('<rect width="200" height="200" stroke-width="3" fill="blue" />');
    });
});

describe('Triangle', () => {
    it ('should return a triangle', () => {
        const triangle = new shapes.Triangle('C', 'green');
        expect(triangle.draw()).toBe('<polygon points="100,0 200,200 0,200" stroke-width="3" fill="green" />');
    });
});

describe('Pentagon', () => {
    it ('should return a pentagon', () => {
        const pentagon = new shapes.Pentagon('D', 'yellow');
        expect(pentagon.draw()).toBe('<polygon points="100,0 200,50 160,200 40,200 0,50" stroke-width="3" fill="yellow" />');
    });
});

describe('Hexagon', () => {
    it ('should return a hexagon', () => {
        const hexagon = new shapes.Hexagon('E', 'orange');
        expect(hexagon.draw()).toBe('<polygon points="100,0 200,50 200,150 100,200 0,150 0,50" stroke-width="3" fill="orange" />');
    });
});

describe('Octagon', () => {
    it ('should return a octagon', () => {
        const octagon = new shapes.Octagon('F', 'purple');
        expect(octagon.draw()).toBe('<polygon points="50,0 150,0 200,50 200,150 150,200 50,200 0,150 0,50" stroke-width="3" fill="purple" />');
    });
});

describe('Star', () => {
    it ('should return a star', () => {
        const star = new shapes.Star('G', 'pink');
        expect(star.draw()).toBe('<polygon points="100,0 122,66 200,66 144,110 166,176 100,132 34,176 56,110 0,66 78,66" stroke-width="3" fill="pink" />');
    });
});

describe('Diamond', () => {
    it ('should return a diamond', () => {
        const diamond = new shapes.Diamond('I', 'black');
        expect(diamond.draw()).toBe('<polygon points="100,0 200,100 100,200 0,100" stroke-width="3" fill="black" />');
    });
});

