const Exercises = require('./code');


describe( 'Exercises Class Tests', () => {
    let ex;
    beforeEach(() => {
        ex = new Exercises();
    });
    describe('isEven', () => {
        test('isEven returns true for even numbers', () => {
            expect(ex.isEven(2)).toBeTruthy();
            expect(ex.isEven(4)).toBeTruthy();
            expect(ex.isEven(20)).toBeTruthy();
        });

        test('isEven returns false for odd numbers', () => {
            expect(ex.isEven(3)).toBeFalsy();
            expect(ex.isEven(7)).toBeFalsy();
            expect(ex.isEven(33)).toBeFalsy();
            expect(ex.isEven('hello')).toBeFalsy();
            expect(ex.isEven(undefined)).toBeFalsy();

        });
    });

    describe('removeAtLeastOne', () => {
        test('removeAtLeastOne should remove at least one element from the array `arr`', () => {
            expect(ex.removeAtLeastOne([10, 20, 30, 40, 50]).length).toBeLessThan(5);
            expect(ex.removeAtLeastOne([10, 20, 30, 40, 50, 60]).length).toBeLessThan(6);
            expect(ex.removeAtLeastOne([1, 2, 3, 4]).length).toBeLessThan(4);
            expect(ex.removeAtLeastOne([10, 20, 30, 40, 50, 60, 70, 80 , 90]).length).toBeLessThan(9);
            expect(ex.removeAtLeastOne([100]).length).toBeLessThan(1);
        });
    });

    describe('simplify', () => {
        test('simplify should remove specific symbols from the string' , () => {
            expect(ex.simplify("hello!")).toBe("hello");
            expect(ex.simplify("hi,hi,hi")).toBe("hihihi");
            expect(ex.simplify("go#od mo.rni'ng!")).toBe("good morning");
            expect(ex.simplify("!!##!!")).toBe("");
            expect(ex.simplify("")).toBe("");
        });
    });

    describe('validate', () => {
        test('validate should check boolean counts', () => {
            expect(ex.validate([true, true, false, true, true])).toBe(true);
            expect(ex.validate([true, true, false, false, false])).toBe(false);
            expect(ex.validate([])).toEqual({ error: "Need at least one boolean" });
            expect(ex.validate([true, false])).toBe(false);
            expect(ex.validate([true, 'hello', 5, false, false])).toBe(false);
        });
    });
});