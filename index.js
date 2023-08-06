// jest questions to take three letters, what shape, and what color

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
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like? (keyword or hex code): '
    }
];

inquirer.prompt(questions).then(answers => {
    const shape = new shapes[answers.shape](answers.letters, answers.color);
    shape.draw();
});