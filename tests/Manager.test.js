const Manager = require('../Employees/manager');

describe("Manager", () => {
    describe('Initialization', () => {
        it('should initiate an object', () => {
            const obj = new Employee();
            expect(typeof(obj)).toEqual('object');
        });
    });

    describe('Name', () => {
        it('should create new name', () => {
            const obj = new Employee('George');
            expect(typeof(obj)).toEqual('George');
        });
    });

    describe('Id', () => {
        it('should create new id', () => {
            const obj = new Id('123');
            expec(typeof(obj)).toEqual('123');
        });
    });

    describe('Email', () => {
        it('should create new email', () => {
            const obj = new Id('something@gmail.com');
            expec(typeof(obj)).toEqual('something@gmail.com');
        });
    });

    describe('officeNumber', () => {
        it('should create new email', () => {
            const obj = new Id('427');
            expec(typeof(obj)).toEqual('427');
        });
    });

});