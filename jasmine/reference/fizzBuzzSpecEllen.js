describe("FizzBuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe("#assess", function() {
    it("returns Fizz when divisible by 3 but not 5", function() {
      expect(fizzbuzz.assess(3)).toEqual("Fizz");
      expect(fizzbuzz.assess(108)).toEqual("Fizz");
      expect(fizzbuzz.assess(105)).not.toEqual("Fizz")
    });

    it("returns Buzz when divisible by 5 but not 3", function() {
      expect(fizzbuzz.assess(5)).toEqual("Buzz");
      expect(fizzbuzz.assess(100)).toEqual("Buzz");
      expect(fizzbuzz.assess(105)).not.toEqual("Buzz")
    });

    it("returns FizzBuzz when divisible by 5 and 3", function() {
      expect(fizzbuzz.assess(15)).toEqual("FizzBuzz");
      expect(fizzbuzz.assess(105)).toEqual("FizzBuzz");
    });

    it("returns the number as a string when not divisible by either 5 or 3", function() {
      expect(fizzbuzz.assess(1)).toEqual("1");
      expect(fizzbuzz.assess(104)).toEqual("104");
    });
  });

  it("can count upwards with fizzbuzzing", function() {
    expect(fizzbuzz.count(1,6)).toEqual(["1","2","Fizz","4","Buzz","Fizz"])
    expect(fizzbuzz.count(10,15)).toEqual(["Buzz","11","Fizz","13","14","FizzBuzz"])
  });
});