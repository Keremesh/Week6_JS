const fizzBuzz = (num) => {
    if (num % 15 == 0) {
        return "fizzbuzz";
    } else if (num % 5 == 0) {
        return "buzz";
    } else if (num % 3 == 0) {
        return "fizz";
    } else {
        return num;
    }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(8));
console.log(fizzBuzz(15));
