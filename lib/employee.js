class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = (typeof email === 'string' ? email.trim(): '');

        name = name.trim();
        if(!name) {
            throw new Error('The entry should contain at least 1 non-whitespace character.');
        } if (typeof id!== 'number') {
            throw new Error('id needs to be a number');
        } if (id < 0 || Math.floor(id) !==id) {
            throw new Error('id needs to be a non-negative interger.');
        } if (email && !email.includes('@')) {
            throw new Error('Email must include "@" symbol.');
        }
    };

    getName() {
    return this.name;
    };

    getId() {
    return this.id;
    };

    getEmail() {
    return this.email;
    };

    getRole() {
    return 'Employee';
    };
};

module.exports = Employee;