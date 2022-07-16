const Intern = require('../lib/intern.js');

describe("Intern", () => {
    describe('Initialization', () => {
        it('should create an object', () => {
            const intern = new Intern('John Doe', 1, 'something@gmail.com', 'Acme University');
            expect(typeof(intern)).toEqual('object');
        });

        it('should take a name, id, email, and school name and set them as properties on an object', ()=> {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const school = 'Acme University';
            const intern = new Intern(name, id, email, school);
            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqua(email);
            expect(intern.school).toEqual(school.trim());
        });
    });

    describe('getSchool', () => {
        it('returns school name passed to the constructor', () => {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const school = 'Acme University';
            const intern = new Intern(name, id, email, school);
            expect(intern.getSchool()).toEqual(school.trim());
        });
    });
});