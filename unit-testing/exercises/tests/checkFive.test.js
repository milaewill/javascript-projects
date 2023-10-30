
const checkFive = require('../checkFive.js');

describe("checkFive", function () {

    test("Should return 'num is less than 5' when num < 5.", function () {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });
    test("Should return 'num is greater than 5' when num > 5.", function () {
        let output = checkFive(6);
        expect(output).toEqual("6 is more than 5.");
    });
    test("Should return 'num is equal to 5' when num = 5.", function () {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

});
