const FizzBuzz = class {
  assess(num) {
    if(num % 3 == 0 && num % 5 == 0) {
      return "FizzBuzz"
    } else if (num % 3 == 0){
      return "Fizz"
    } else if (num % 5 == 0) {
      return "Buzz"
    } else {
      return num.toString()
    }
  }

  count(first,last) {
    let ary = []
    for(let i = first; i <= last; i++){
      ary.push(this.assess(i))
    };
    return ary
  };
}