const input = require('../lib/input.js');

describe('teamName', () => {
    it('retruns true if the input has at least 1 non-whitespace character', () => {
        expect(input.teamName("My Team")).toStrictEqual(true);
        expect(input.teamName(" My Team ")).toStrictEqual(true);
    });
    it('does not return true if the input has at least 1 non-whitespace character', () => {
        expect(input.teamName("")).not.toStrictEqual(true);
        expect(input.teamName(" ")).not.toStrictEqual(true);
    });
});

describe('employeeName', () => {
    it('returns true if the input has at least 1 non-whitespace character', () => {
        expect(input.employeeName("")).toStrictEqual(true);
        expect(input.employeeName(" ")).toStrictEqual(true);
    });
    it('does not return true if the input has at least 1 non-whitespace character', () => {
        expect(input.employeeName("")).not.toStrictEqual(true);
        expect(input.employeeName(" ")).not.toStrictEqual(true);
    });
});

describe('correctId', () =>{
    it('retruns true if the number is a non-negative interger', () => {
        expect(input.correctId(0)).toStrictEqual(true);
        expect(input.correctId(1234)).toStrictEqual(true);
    });
    it('does not return true if the input is negative', () => {
        expect(input.correctId(-1)).not.toStrictEqual(true);
    });
    it('does not return true if the input is not an interger', () => {
        expect(input.correctId(1.5)).not.toStrictEqual(true);
    });
});

describe('correctEmail', () => {
    it('returns true if the input has no non-whitespace characters', () =>{
        expect(input.correctEmail("")).toStrictEqual(true);
        expect(input.correctEmail(" ")).toStrictEqual(true);
    });
    it('returns true if the input has a "@" with at least one letter on each side', () => {
        expect(input.correctEmail("a@b")).toStrictEqual(true);
        expect(input.correctEmail(" a@b ")).toStrictEqual(true);
    });
    it('does not returns true if the input has at least 1 non-whitespace character but not an "@" with at least one letter on each side', () => {
        expect(input.correctEmail("ab")).not.toStrictEqual(true);
        expect(input.correctEmail(" a @b ")).not.toStrictEqual(true);
    });
});