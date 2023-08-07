const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const questions = [
    {
        type: 'input',
        name: 'letters',
        message: 'Please enter three letters: '
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Square', 'Circle', 'Triangle', 'Pentagon', 'Hexagon', 'Octagon', 'Star', 'Diamond']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like the shape to be? (keyword or hex code): '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like the text to be? (keyword or hex code): '
    }
];

function writeSVG(answers) {
    let shape;
    switch (answers.shape) {
        case 'Square':
            shape = new shapes.Square(answers.letters, answers.color);
            break;
        case 'Circle':
            shape = new shapes.Circle(answers.letters, answers.color);
            break;
        case 'Triangle':
            shape = new shapes.Triangle(answers.letters, answers.color);
            break;
        case 'Pentagon':
            shape = new shapes.Pentagon(answers.letters, answers.color);
            break;
        case 'Hexagon':
            shape = new shapes.Hexagon(answers.letters, answers.color);
            break;
        case 'Octagon':
            shape = new shapes.Octagon(answers.letters, answers.color);
            break;
        case 'Star':
            shape = new shapes.Star(answers.letters, answers.color);
            break;
        case 'Diamond':
            shape = new shapes.Diamond(answers.letters, answers.color);
            break;
    }
    let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.draw()}
        <text x="50%" y="50%" font-size="30px" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}">${answers.letters}</text>
    </svg>`;
    fs.writeFile('logo.svg', svg, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
}


function init() {
    inquirer.prompt(questions).then(answers => {
        writeSVG(answers);
    });
}


init();
