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
        const employee = new Employee('John', 427, "something@yahoo.com");
        
    })
})