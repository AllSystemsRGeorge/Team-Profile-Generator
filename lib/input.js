const teamName = input => (input.trim() 
? true : 'The team should have at least have 1 non-whitespace character.');

const employeeName = input => (input.trim()
? true : 'The team member should have at least have 1 non-whitespace character.');

const correctId = input => {
    if (isNaN(input)) {
        return 'The member ID must be a whole number';
    } else if (input < 0) {
        return 'The member ID must not be a negative.';
    } else if (Math.floor(input) !== input) {
        return 'The member ID must be a whole number';
    }
    return true;
};

const correctEmail = input => {
    input = input.trim();
    if (!input)
    return true;

    const emailDetector = /[a-z0-9]@[a-z0-9]/i;
    if (!emailDetector.test(input)) {
        return 'Email address not valid.  Please try again.'
    };
    return true
};

module.exports = {teamName, employeeName, correctId, correctEmail};