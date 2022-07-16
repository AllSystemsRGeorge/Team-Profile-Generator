const Engineer = require('../lib/engineer.js');

describe("Engineer", () => {
    describe('Initialization', () => {
        it('should create an object', () => {
            const engineer = new Engineer('John Doe', 1, 'something@gmail.com', 'gitName');
            expect(typeof(engineer)).toEqual('object');
        });
    
        it('should take a name, id, email and set them as properties on an object', ()=> {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const engineer = new Engineer(name, id, email, github);
            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email);
            expect(engineer.github).toEqual(github);
        });
    });

    describe('getGithub', () => {
        it('should return gitub username passed to the constructor', ()=> {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const gitHub = 'gitName';
            const engineer = new Engineer(name, id, email, github);
            expect(engineer.getGithub()).toEqual(github);
        });
    });

    describe('getGithub', () => {
        it('should return Engineer', ()=> {
            const name = 'John Doe';
            const id = 1;
            const email = 'johndoe@something@gmail.com';
            const engineer = new Engineer(name, id, email);
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});