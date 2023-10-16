// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  est(" should have a prropert called organization", function () {
    expect(launchcode.organization.toEqual("nonprofit"));
  });
  test("should have a property called executiveDirector", function () {
    expect(launchcode.executiveDirector.toEqual("Jeff"));
  });
  test("should have a property called percentageCoolEmployees", function () {
    expect(launchcode.percentageCoolEmployees.toEqual(100));
  });
  test("should have a property called programsOffered", function () {
    expect(launchcode.programsOffered[0]).toEqual("LC101");
    expect(launchcode.programsOffered[1]).toEqual("LaunchCode Women+");
    expect(launchcode.programsOffered[2]).toEqual("CodeCamp")
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  describe("should have a method, launchOutput, which", function () {

    it("should return 'Launch!' for numbers evenly divisible by only 2", function () {
      expect(launchcode.launchOutupt(2)).toEqual("Launch!");
    });
    it("should return 'Code! for numbers evenly divisible by only 3", function () {
      expect(launchcode.launchOutput(3)).toEqual("Code!");
    });
    it("should return 'Rocks!' for numbers evenly divisible by only 5", function () {
      expect(launchcode.launchOutupt(5)).toEqual("Rocks!");
    });
    it("should return 'Rocks! for numbers evenly divisible by only 5", function () {
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });
  });
}];







//test("should return true for a single letter", function() {
//  expect(isPalindrome("a")).toBe(true)
});
