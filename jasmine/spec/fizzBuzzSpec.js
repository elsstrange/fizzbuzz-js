describe("FizzBuzz", function() {
   it("prints the number if not divisible by 3 or 5", function() {
    var fizzbuzz = new FizzBuzz()
    var number = 1
    var result = fizzbuzz.convert(number)
    expect(result).toEqual(number)
   })

   it("prints Fizz if divisible by 3", function() {
    var fizzbuzz = new FizzBuzz()
    var number = 3
    var result = fizzbuzz.convert(number)
    expect(result).toEqual("Fizz")
   })

   it("prints Buzz if divisible by 5", function() {
    var fizzbuzz = new FizzBuzz()
    var number = 5
    var result = fizzbuzz.convert(number)
    expect(result).toEqual("Buzz")
   })

   it("prints FizzBuzz if divisible by 3 and 5", function() {
    var fizzbuzz = new FizzBuzz()
    var number = 15
    var result = fizzbuzz.convert(number)
    expect(result).toEqual("FizzBuzz")
   })
})