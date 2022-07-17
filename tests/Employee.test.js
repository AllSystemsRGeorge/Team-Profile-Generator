const Employee = require('../lib/employee.js');

describe("Employee", () => {
    describe('Initialization', () => {
        it('should create an object', () => {
            const employee = new Employee('John Doe', 1, 'something@gmail.com');
            expect(typeof(employee)).toEqual('object');
        });
    
        it('should take a name, id, email and set them as properties on an object', ()=> {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const employee = new Employee(name, id, email);
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);
        });

        it("sends error if name doesn't contain any non-whitespace characters", () => {
            const name = ' ';
            const id = 1;
            const email = 'johndoe.something@gmail.com';
            expect(() => { new Employee(name, id, email); }).toThrow();
        });

        it("send error if id is not a non-negative integer", () => {
            const name = 'John Doe';
            const badId1 = '1';
            const badId2 = -1;
            const badId3 = 0.5;
            const email = 'johndoe.something@gmail.com';

            expect(() => { new Employee(name, badId1, email); }).toThrow();
            expect(() => { new Employee(name, badId2, email); }).toThrow();
            expect(() => { new Employee(name, badId3, email); }).toThrow();
        });
    
        it('sends an error if any email is provided but it is not a string with an @ inside', () => {
            const name = 'John Doe';
            const id = 1;
            const badEmai = 'johndoeemail.comt';
            
            expect(() => { new Employee(name, id, badEmail); }).toThrow();
        });

    });

    describe('getName', () => {
        it('sends the name provided when creating the object, without whitespeace', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const employee = new Employee(name, id, email);
            expect(employee.getName()).toEqual(name.trim());
        });

    });
    
        describe('getId', () => {
            it('sends the id provided when creating the object', () => {
                const name = 'John Doe';
                const id = 1;
                const email = 'johndoe@something@gmail.com';
                const employee = new Employee(name, id, email);
                expect(employee.getId()).toEqual(id);
            });
    });

    describe('getEmail', () => {
        it('sends a string', () => {
            const name = 'John Doe';
            const id = 1;
            const employee = new Employee(name, id);
            expect(typeof employee.getEmail()).toEqual('string');
        });

        it('sends the email provided when creating the object', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const employee = new Employee(name, id, email);
            expect(employee.getEmail()).toEqual(email);
        });
    });
        
    describe('getRole', () => {
        it('should return the title "Employee"', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const employee = new Employee(name, id, email);
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});