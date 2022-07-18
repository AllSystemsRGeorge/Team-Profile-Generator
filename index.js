const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const input = require('./lib/input');
const { teamFile } = require('./lib/team');

let team = {name: '', employees: [] };

const trim = string => string.trim();

let highestId = 0;

const initialQuestions = [
    {
        type: 'input',
        name: 'teamName',
        message: 'Team Name',
        deafault: 'My Team',
        filter: trim,
        validate: input.teamName
    },
    {
        type: 'number',
        name: 'id',
        message: answers => `${answers.name}'s Employee ID`,
        default: () => highestId + 1,
        validate: input.correctId
    },
    {
       type: 'input',
       name: 'email',
       message: answers => `${answers.name}'s email address`,
       filter: trim,
       validate: input.correctEmail 
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: answers => `${answers.name}'s office number`,
        filter: trim
    }
];

const anotherQuestion = [
    {
        type: 'confirm',
        name: 'anotherQuestion',
        message: 'Would you like to add another team member?'
    }
];

const employeeQuestion = [
    {
        type: 'list',
        name: 'employeeRole',
        message: 'What role will this person have?',
        choices: ['Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter employee name',
        filter: trim,
        validate: input.employeeName
    },
    {
        type: 'input',
        name: 'id',
        message: answers => `${answers.name}'s new Employee ID`,
        default: () => highestId + 1,
        validate: input.correctId
    },
    {
        type: 'input',
        name: 'email',
        message: `${answers.name}'s new email address`,
        filter: trim,
        validate: input.correctEmail
    },
    {
        type: 'input',
        name: 'github',
        message: answers => `${answers.name}'s GitHub account is`,
        filter: trim,
        when: answers => answers.typeOfEmployee === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: answers => `${answers.name}'s school's name`,
        when: answers => answers.typeOfEmployee === 'Intern'
    },
];

function promptAddAnother() {
    inquirer.prompt(anotherQuestion).then(answers => {
        if (answers.addAnother) {
            promptNextEmployee();
        } else {
            teamFile(team);
        };
    });
};

function promptNextEmployee() {
    inquirer.prompt(employeeQuestion).then(answers => {
        let employee;
        const { name, id, email, github, school } = answers;
        highestId = Math.max(id, highestId);
        if (answers.typeOfEmployee === 'Engineer') {
            employee = new Engineer(name, id, email, github);
        } else {
            employee = new Intern(name, id, email, school);
        }
        team.employees.push(employee);
        promptAddAnother();
    });
};

inquirer.prompt(initialQuestions).then(answers => {
    const { teamName, name, id, email, officeNumber } = answers;
    highestId = id;

    team.name = teamName;
    team.employees.push(new Manager(name, id, email, officeNumber));
    promptAddAnother();
});