const fizzbuzz = (nums) => {
    for (let i = 0; i <= nums; i++) {
          if (nums % 15 === 0) {
            return 'FizzBuzz';
        } else if (nums % 3 === 0) {
            return 'Fizz';
              } else if (nums % 5 === 0) {
                return 'Buzz';
        }
    }
}

module.exports = fizzbuzz;