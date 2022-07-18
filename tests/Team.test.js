const { teamFile, generateCardHTML, generateEmployeeText, generateEmployeeInfo} = require('../lib/team');

const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

describe('generateEmployeeText', () => {
    it('returns a string', () => {
        const employee = new Employee('John', 1, "something@yahoo.com");
        expect(typeof generateEmployeeText(employee)).toEqual('string');
    });
    
    it('includes the role of the employee', () => {
        const employee = new Employee('Leonardo', 1, 'helloworld@something.com');
        const engineer = new Engineer('Donatello', 2, 'helloworld@something.com', 'partytime');
        const manager = new Manager('Raphael', 3, 'helloworld@something.com', '101');
        const intern = new Intern('Michelangelo', 4, 'helloworld@something.com', 'Pizza Hut Universtiy');

        expect(generateEmployeeText(employee).includes(employee.getRole())).toBeTruthy();
        expect(generateEmployeeText(engineer).includes(engineer.getRole())).toBeTruthy();
        expect(generateEmployeeText(manager).includes(manager.getRole())).toBeTruthy();
        expect(generateEmployeeText(intern).includes(intern.getRole())).toBeTruthy();
    });
});

describe('generateEmployeeInfo', () => {
    it('returns a string', () => {
        const employee = new Employee('John', 1, "something@yahoo.com");
        expect(typeof generateEmployeeInfo(employee)).toEqual('string');
    });
   
    it('includes the employee ID', () => {
        const employee = new Employee('Stanley', 427, "something@yahoo.com");
        expect(generateEmployeeInfo(employee).includes(employee.getId())).toBeTruthy();
    });

    it('includes a mail link and the employee email', () => {
        const employee = new Employee('Stanley', 427, "something@yahoo.com");
        const mailLink = `mail to: ${employee.getEmail()}`
        expect(generateEmployeeInfo(employee).includes(mailLink)).toBeTruthy();
    });

    it('does not include a mail link if the employee does not have an email', () => {
        const employee = new Employee('Stanley', 427);
        const mailLink = `mail to:`
        expect(generateEmployeeInfo(employee).includes(mailLink)).toBeFalsy();
    });

    it('includes manager office number', () => {
        const manager = new Manager('Karen', 1, "something@yahoo.com", '101');
        expect(generateEmployeeInfo(manager).includes(manager.getOfficeNumber())).toBeTruthy();
    });

    it('links to an engineer github page', () => {
        const engineer = new Engineer('Cid', 2, 'cid@ff.com', 'RocketmanCid');
        const gitHub = `<a href='https://github.com/${engineer.getGithub()}' target='_blank'>`;
        expect(generateEmployeeInfo(engineer).includes(engineer.getGithub)).toBeTruthy();
    });
    it('returns intern school', () => {
        const intern = new Intern('Giovanni', 3, 'something@yahoo.com', 'Grand Tour University');
        expect(generateEmployeeInfo(intern).includes(intern.getSchool())).toBeTruthy();
    });
});