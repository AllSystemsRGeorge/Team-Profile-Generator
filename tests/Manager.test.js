const Manager = require('../lib/manager.js');

describe("Manager", () => {
    describe('Initialization', () => {
        it('should create an object', () => {
            const manager = new Manager('John Doe', 1, 'something@gmail.com', '101');
            expect(typeof(manager)).toEqual('object');
        });
    
        it('should take a name, id, email, office number, and set them as properties on an object', ()=> {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const officeNumber = '427'
            const manager = new Manager(name, id, email, officeNumber);
            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email);
            expect(manager.officeNumber).toEqual(officeNumber);
        });
    });

    describe('getOfficeNumber', () => {
        it('should return office number passed to the constructor', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const officeNumber = '427'
            const manager = new Manager(name, id, email, officeNumber);
            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });
    });

    describe('getRole', () => {
        it('should return "Manager"', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const officeNumber = '427'
            const manager = new Manager(name, id, email, officeNumber);
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});