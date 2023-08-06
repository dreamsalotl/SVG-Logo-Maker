class Shape {
    constructor(letters, color) {
        this.letters = letters;
        this.color = color;
    }
}

class Circle extends Shape {
    draw() {
        return `<circle cx="100" cy="100" r="100" stroke-width="3" fill="${this.color}" />`
    }
}

class Square extends Shape {
    draw() {
        return `<rect width="200" height="200" stroke-width="3" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    draw() {
        return `<polygon points="100,0 200,200 0,200" stroke-width="3" fill="${this.color}" />`
    }
}

class Pentagon extends Shape {
    draw() {
        return `<polygon points="100,0 200,50 160,200 40,200 0,50" stroke-width="3" fill="${this.color}" />`
    }
}

class Hexagon extends Shape {
    draw() {
        return `<polygon points="100,0 200,50 200,150 100,200 0,150 0,50" stroke-width="3" fill="${this.color}" />`
    }
}   

class Octagon extends Shape {
    draw() {
        return `<polygon points="50,0 150,0 200,50 200,150 150,200 50,200 0,150 0,50" stroke-width="3" fill="${this.color}" />`
    }
}

class Star extends Shape {
    draw() {
        return `<polygon points="100,0 122,66 200,66 144,110 166,176 100,132 34,176 56,110 0,66 78,66" stroke-width="3" fill="${this.color}" />`
    }
}

class Heart extends Shape {
    draw() {
        return `<path d="M100,0 Q150,0 150,50 Q150,100 100,150 Q50,100 50,50 Q50,0 100,0" stroke-width="3" fill="${this.color}" />`
    }
}

class Diamond extends Shape {
    draw() {
        return `<polygon points="100,0 200,100 100,200 0,100" stroke-width="3" fill="${this.color}" />`
    }
}

module.exports = {
    Square,
    Circle,
    Triangle,
    Pentagon,
    Hexagon,
    Octagon,
    Star,
    Heart,
    Diamond
};

